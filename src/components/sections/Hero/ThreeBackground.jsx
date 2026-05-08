import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const W = mount.clientWidth || window.innerWidth;
    const H = mount.clientHeight || window.innerHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(55, W / H, 0.1, 1000);
    camera.position.set(0, 0, 10);

    // Renderer
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'low-power',
      });
    } catch {
      return; // WebGL not supported
    }

    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // ── Particle nodes ──────────────────────────────
    const COUNT = 220;
    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);
    const nodeVecs = [];

    const blue = new THREE.Color('#3B82F6');
    const purple = new THREE.Color('#8B5CF6');
    const cyan = new THREE.Color('#22D3EE');

    for (let i = 0; i < COUNT; i++) {
      const x = (Math.random() - 0.5) * 30;
      const y = (Math.random() - 0.5) * 18;
      const z = (Math.random() - 0.5) * 14;

      positions[i * 3]     = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      nodeVecs.push(new THREE.Vector3(x, y, z));

      // Gradient: cyan → blue → purple across x axis
      const t = (x + 15) / 30;
      let c;
      if (t < 0.5) {
        c = cyan.clone().lerp(blue, t * 2);
      } else {
        c = blue.clone().lerp(purple, (t - 0.5) * 2);
      }
      colors[i * 3]     = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(particleGeo, particleMat);

    // ── Connection lines ────────────────────────────
    const MAX_DIST = 4.5;
    const linePositions = [];

    for (let i = 0; i < COUNT; i++) {
      for (let j = i + 1; j < COUNT; j++) {
        if (nodeVecs[i].distanceTo(nodeVecs[j]) < MAX_DIST) {
          linePositions.push(
            nodeVecs[i].x, nodeVecs[i].y, nodeVecs[i].z,
            nodeVecs[j].x, nodeVecs[j].y, nodeVecs[j].z
          );
        }
      }
    }

    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute(
      'position',
      new THREE.BufferAttribute(new Float32Array(linePositions), 3)
    );
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x6366F1,
      transparent: true,
      opacity: 0.09,
    });
    const lines = new THREE.LineSegments(lineGeo, lineMat);

    // Group for unified rotation
    const group = new THREE.Group();
    group.add(particles);
    group.add(lines);
    scene.add(group);

    // ── Mouse parallax ──────────────────────────────
    let targetRY = 0;
    let targetRX = 0;
    const onMouseMove = (e) => {
      targetRY = ((e.clientX / window.innerWidth) - 0.5) * 0.5;
      targetRX = -((e.clientY / window.innerHeight) - 0.5) * 0.25;
    };
    window.addEventListener('mousemove', onMouseMove);

    // ── Resize ──────────────────────────────────────
    const onResize = () => {
      if (!mount) return;
      const nW = mount.clientWidth;
      const nH = mount.clientHeight;
      camera.aspect = nW / nH;
      camera.updateProjectionMatrix();
      renderer.setSize(nW, nH);
    };
    window.addEventListener('resize', onResize);

    // ── Animation ───────────────────────────────────
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const clock = new THREE.Clock();
    let raf;

    const animate = () => {
      raf = requestAnimationFrame(animate);

      if (!prefersReduced) {
        const t = clock.getElapsedTime();
        // Slow base rotation + mouse influence (lerped)
        group.rotation.y += (t * 0.035 + targetRY - group.rotation.y) * 0.02;
        group.rotation.x += (t * 0.012 + targetRX - group.rotation.x) * 0.02;

        // Subtle opacity pulse
        particleMat.opacity = 0.75 + Math.sin(t * 0.6) * 0.15;
        lineMat.opacity = 0.07 + Math.sin(t * 0.4) * 0.03;
      }

      renderer.render(scene, camera);
    };
    animate();

    // ── Cleanup ─────────────────────────────────────
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      if (mount && mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      particleGeo.dispose();
      particleMat.dispose();
      lineGeo.dispose();
      lineMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ position: 'absolute', inset: 0, zIndex: 1 }}
      aria-hidden="true"
    />
  );
};

export default ThreeBackground;
