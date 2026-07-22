import { useEffect, useRef, useState } from 'react'
import {
  LayoutGrid, Bot, Play, Waypoints, AlertTriangle, Settings,
  Search, ChevronDown, ArrowUp, ArrowDown,
} from 'lucide-react'
import './AtlasMockup.css'

const DESIGN_WIDTH = 940

const NAV = [
  { icon: LayoutGrid, label: 'Overview', active: true },
  { icon: Bot, label: 'Agents' },
  { icon: Play, label: 'Runs' },
  { icon: Waypoints, label: 'Traces' },
  { icon: AlertTriangle, label: 'Incidents', badge: 2 },
  { icon: Settings, label: 'Settings' },
]

const KPIS = [
  { label: 'Active agents', value: '24', delta: '+3', up: true },
  { label: 'Runs today', value: '18,204', delta: '+12.4%', up: true },
  { label: 'p95 latency', value: '412ms', delta: '−18ms', up: false, good: true },
  { label: 'Success', value: '99.2%', delta: '+0.3%', up: true },
]

const FEED = [
  { id: 'intake-triage-04', text: 'Resolved claim escalation', time: '00:04', status: 'ok' },
  { id: 'route-planner-11', text: 'Recomputed 84 lanes', time: '00:12', status: 'ok' },
  { id: 'ledger-recon-02', text: 'Flagged 3 exceptions', time: '00:31', status: 'warn' },
  { id: 'intake-triage-07', text: 'Handed off to human', time: '01:03', status: 'ok' },
  { id: 'doc-extract-19', text: 'Retry on rate limit', time: '01:20', status: 'warn' },
]

const RUNS = [
  { id: 'run_9f3a2c', agent: 'intake-triage-04', dur: '1.8s', status: 'Success' },
  { id: 'run_9f3a1d', agent: 'route-planner-11', dur: '4.2s', status: 'Success' },
  { id: 'run_9f3a0e', agent: 'ledger-recon-02', dur: '2.1s', status: 'Review' },
  { id: 'run_9f39f7', agent: 'doc-extract-19', dur: '0.9s', status: 'Success' },
]

/* Two smooth series for the area chart */
function buildPath(points, w, h, max) {
  const step = w / (points.length - 1)
  const pts = points.map((p, i) => [i * step, h - (p / max) * h])
  let d = `M ${pts[0][0]} ${pts[0][1]}`
  for (let i = 0; i < pts.length - 1; i++) {
    const [x0, y0] = pts[i]
    const [x1, y1] = pts[i + 1]
    const cx = (x0 + x1) / 2
    d += ` C ${cx} ${y0}, ${cx} ${y1}, ${x1} ${y1}`
  }
  return { line: d, area: `${d} L ${w} ${h} L 0 ${h} Z` }
}

function Chart() {
  const w = 560, h = 190, max = 100
  const a = [42, 55, 48, 63, 58, 74, 69, 82, 78, 90, 88, 96]
  const b = [30, 38, 34, 44, 40, 52, 49, 58, 55, 66, 62, 71]
  const pa = buildPath(a, w, h, max)
  const pb = buildPath(b, w, h, max)
  return (
    <svg className="atlas-chart" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" role="img" aria-label="Completed runs over seven days">
      <defs>
        <linearGradient id="atlasFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7FB79A" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#7FB79A" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75, 1].map((g) => (
        <line key={g} x1="0" x2={w} y1={h * g} y2={h * g}
          stroke="rgba(245,242,234,0.08)" strokeWidth="1" />
      ))}
      <path d={pb.line} fill="none" stroke="rgba(245,242,234,0.28)" strokeWidth="1.5" />
      <path d={pa.area} fill="url(#atlasFill)" />
      <path d={pa.line} fill="none" stroke="#7FB79A" strokeWidth="2" />
    </svg>
  )
}

export default function AtlasMockup() {
  const wrapRef = useRef(null)
  const innerRef = useRef(null)
  const [box, setBox] = useState({ scale: 1, height: 0 })

  useEffect(() => {
    const wrap = wrapRef.current
    const inner = innerRef.current
    if (!wrap || !inner) return
    const measure = () => {
      const available = wrap.clientWidth
      const scale = Math.min(1, available / DESIGN_WIDTH)
      const height = inner.offsetHeight * scale
      setBox({ scale, height })
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(wrap)
    return () => ro.disconnect()
  }, [])

  return (
    <div className="atlas-wrap" ref={wrapRef} style={{ height: box.height || undefined }}>
      <div className="atlas-glow" aria-hidden="true" />
      <div
        className="atlas-scale"
        ref={innerRef}
        style={{ transform: `scale(${box.scale})`, width: DESIGN_WIDTH }}
      >
        <div className="atlas" role="img" aria-label="Atlas — agent operations console dashboard mockup">
          {/* Browser chrome */}
          <div className="atlas__chrome">
            <div className="atlas__lights">
              <span /><span /><span />
            </div>
            <div className="atlas__url">
              <span className="atlas__lock" />
              atlas.webfluence.tech/ops
            </div>
            <div className="atlas__chrome-right"><Search size={13} strokeWidth={1.5} /></div>
          </div>

          <div className="atlas__app">
            {/* Sidebar */}
            <aside className="atlas__sidebar">
              <div className="atlas__brand">ATLAS</div>
              <nav className="atlas__nav">
                {NAV.map(({ icon: Icon, label, active, badge }) => (
                  <div key={label} className={`atlas__navitem${active ? ' is-active' : ''}`}>
                    <Icon size={15} strokeWidth={1.5} />
                    <span>{label}</span>
                    {badge && <em className="atlas__navbadge">{badge}</em>}
                  </div>
                ))}
              </nav>
              <div className="atlas__sidefoot">
                <div className="atlas__envdot" />
                <span>us-west-2 · healthy</span>
              </div>
            </aside>

            {/* Main */}
            <div className="atlas__content">
              <header className="atlas__head">
                <div>
                  <h4 className="atlas__title">Agent operations</h4>
                  <p className="atlas__sub">Fleet overview · updated 4s ago</p>
                </div>
                <div className="atlas__headtools">
                  <span className="atlas__pill atlas__pill--prod">
                    <i /> PRODUCTION
                  </span>
                  <span className="atlas__chip">Last 7 days <ChevronDown size={12} strokeWidth={1.5} /></span>
                  <div className="atlas__avatars">
                    <span>PR</span><span>DV</span><span>ML</span><span className="atlas__avatars-more">+5</span>
                  </div>
                </div>
              </header>

              {/* KPI row */}
              <div className="atlas__kpis">
                {KPIS.map((k) => (
                  <div key={k.label} className="atlas__kpi">
                    <span className="atlas__kpi-label">{k.label}</span>
                    <span className="atlas__kpi-value">{k.value}</span>
                    <span className={`atlas__kpi-delta${(k.up || k.good) ? ' is-up' : ' is-down'}`}>
                      {k.up ? <ArrowUp size={11} strokeWidth={2} /> : <ArrowDown size={11} strokeWidth={2} />}
                      {k.delta}
                    </span>
                  </div>
                ))}
              </div>

              {/* Chart + activity */}
              <div className="atlas__grid">
                <section className="atlas__panel atlas__panel--chart">
                  <div className="atlas__panel-head">
                    <span>Completed runs — 7 days</span>
                    <div className="atlas__legend">
                      <em className="dot-a" /> Completed
                      <em className="dot-b" /> Started
                    </div>
                  </div>
                  <Chart />
                  <div className="atlas__xaxis">
                    <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                  </div>
                </section>

                <section className="atlas__panel atlas__panel--feed">
                  <div className="atlas__panel-head"><span>Live activity</span></div>
                  <ul className="atlas__feed">
                    {FEED.map((f, i) => (
                      <li key={i} className="atlas__feedrow">
                        <span className={`atlas__statusdot atlas__statusdot--${f.status}`} />
                        <div className="atlas__feedbody">
                          <code>{f.id}</code>
                          <span>{f.text}</span>
                        </div>
                        <time>{f.time}</time>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              {/* Runs table */}
              <section className="atlas__panel atlas__table">
                <div className="atlas__panel-head"><span>Recent runs</span></div>
                <div className="atlas__thead">
                  <span>Run</span><span>Agent</span><span>Duration</span><span className="ta-r">Status</span>
                </div>
                {RUNS.map((r) => (
                  <div key={r.id} className="atlas__trow">
                    <code>{r.id}</code>
                    <span>{r.agent}</span>
                    <span className="atlas__dur">{r.dur}</span>
                    <span className="ta-r">
                      <em className={`atlas__tag atlas__tag--${r.status === 'Success' ? 'ok' : 'review'}`}>{r.status}</em>
                    </span>
                  </div>
                ))}
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
