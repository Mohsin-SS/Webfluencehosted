import Matter from 'matter-js';

const { Engine, Runner, Bodies, Body, Composite, Mouse, MouseConstraint, Events } = Matter;

const WALL = 400;
const WALL_HEIGHT = 8000;

// Mouse listeners that matter-js attaches but doesn't expose in its typings.
type MouseInternals = Matter.Mouse & { mousewheel: EventListener; mouseup: EventListener };

// Drops the playground's .pill elements into a Matter.js world and mirrors each body's
// position onto its element, so the pills stay real, crisp DOM text.
export function initPlayground(root: HTMLElement) {
  root.classList.add('is-live');

  let width = root.clientWidth;
  let height = root.clientHeight;

  const engine = Engine.create();

  const makeWalls = () => {
    const wall = { isStatic: true };
    const top = height - WALL_HEIGHT;
    return [
      Bodies.rectangle(width / 2, height + WALL / 2, width + WALL * 2, WALL, wall),
      Bodies.rectangle(width / 2, top - WALL / 2, width + WALL * 2, WALL, wall),
      Bodies.rectangle(-WALL / 2, top + WALL_HEIGHT / 2, WALL, WALL_HEIGHT, wall),
      Bodies.rectangle(width + WALL / 2, top + WALL_HEIGHT / 2, WALL, WALL_HEIGHT, wall),
    ];
  };

  const items = [...root.querySelectorAll<HTMLElement>('.pill')].map((el, i) => {
    const w = el.offsetWidth;
    const h = el.offsetHeight;
    // Stagger the pills above the visible area so they rain in one after another.
    const body = Bodies.rectangle(w / 2 + Math.random() * Math.max(width - w, 1), -h * (1 + i * 0.9), w, h, {
      chamfer: { radius: h / 2 },
      restitution: 0.45,
      friction: 0.2,
      frictionAir: 0.012,
      angle: (Math.random() - 0.5) * 0.8,
    });
    return { el, body, w, h };
  });

  const sync = () => {
    for (const { el, body, w, h } of items) {
      el.style.transform = `translate(${body.position.x - w / 2}px, ${body.position.y - h / 2}px) rotate(${body.angle}rad)`;
    }
  };

  let walls = makeWalls();
  Composite.add(engine.world, [...walls, ...items.map(item => item.body)]);
  Events.on(engine, 'afterUpdate', sync);
  sync();

  if (window.matchMedia('(pointer: fine)').matches) {
    const mouse = Mouse.create(root) as MouseInternals;
    // Keep page scrolling working over the playground, and release a drag that ends outside it.
    root.removeEventListener('wheel', mouse.mousewheel);
    window.addEventListener('mouseup', mouse.mouseup);
    Composite.add(engine.world, MouseConstraint.create(engine, { mouse, constraint: { stiffness: 0.2, damping: 0.1 } }));
    root.classList.add('is-draggable');
  }

  const runner = Runner.create();
  Runner.run(runner, engine);

  new IntersectionObserver(([entry]) => {
    runner.enabled = entry.isIntersecting;
  }).observe(root);

  let resizeTimer: number | undefined;
  window.addEventListener('resize', () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
      width = root.clientWidth;
      height = root.clientHeight;
      Composite.remove(engine.world, walls);
      walls = makeWalls();
      Composite.add(engine.world, walls);

      for (const item of items) {
        // Pill font sizes are fluid, so resize bodies to match their elements.
        const w = item.el.offsetWidth;
        const h = item.el.offsetHeight;
        if (w !== item.w || h !== item.h) {
          Body.scale(item.body, w / item.w, h / item.h);
          item.w = w;
          item.h = h;
        }
        const { x, y } = item.body.position;
        if (x > width - w / 2 || y > height - h / 2) {
          Body.setPosition(item.body, { x: Math.min(x, width - w / 2), y: -h });
        }
      }
    }, 150);
  });
}
