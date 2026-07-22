import './CaseCover.css'

/**
 * Abstract, editorial SVG cover compositions per case study.
 * type: 'ledger' | 'waveform' | 'routes' | 'grid'
 */
export default function CaseCover({ type, className = '' }) {
  return (
    <div className={`cover cover--${type} ${className}`} aria-hidden="true">
      {type === 'ledger' && <Ledger />}
      {type === 'waveform' && <Waveform />}
      {type === 'routes' && <Routes />}
      {type === 'grid' && <Grid />}
    </div>
  )
}

/* Fintech — ledger columns + settlement bars */
function Ledger() {
  const bars = [34, 52, 41, 68, 57, 80, 72, 96]
  return (
    <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" role="img">
      {[0, 1, 2, 3, 4].map((r) => (
        <line key={r} x1="28" x2="372" y1={60 + r * 34} y2={60 + r * 34}
          stroke="var(--accent)" strokeOpacity="0.18" strokeWidth="1" />
      ))}
      {[0, 1, 2].map((c) => (
        <line key={c} x1={120 + c * 90} x2={120 + c * 90} y1="44" y2="212"
          stroke="var(--accent)" strokeOpacity="0.14" strokeWidth="1" />
      ))}
      <g>
        {bars.map((h, i) => (
          <rect key={i} x={40 + i * 42} y={212 - h} width="20" height={h} rx="2"
            fill="var(--accent)" fillOpacity={i === bars.length - 1 ? 0.9 : 0.32} />
        ))}
      </g>
      <circle cx="336" cy="70" r="5" fill="var(--accent)" />
    </svg>
  )
}

/* Healthcare — layered pulse waveforms */
function Waveform() {
  const wave = (amp, y, op) => {
    let d = `M 20 ${y}`
    for (let x = 20; x <= 380; x += 8) {
      const t = (x - 20) / 40
      const spike = (x > 150 && x < 250) ? amp * 2.2 : amp
      const val = y - Math.sin(t) * spike * (0.4 + 0.6 * Math.abs(Math.sin(t * 0.7)))
      d += ` L ${x} ${val.toFixed(1)}`
    }
    return <path d={d} fill="none" stroke="var(--accent)" strokeOpacity={op} strokeWidth="1.5" strokeLinecap="round" />
  }
  return (
    <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" role="img">
      {wave(14, 90, 0.2)}
      {wave(22, 135, 0.45)}
      {wave(14, 180, 0.2)}
      <circle cx="200" cy="135" r="6" fill="var(--accent)" />
      <circle cx="200" cy="135" r="16" fill="none" stroke="var(--accent)" strokeOpacity="0.35" strokeWidth="1" />
    </svg>
  )
}

/* Logistics — concentric route arcs + nodes */
function Routes() {
  const cx = 96, cy = 200
  return (
    <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" role="img">
      {[70, 120, 170, 220, 270].map((r, i) => (
        <path key={r} d={`M ${cx + r} ${cy} A ${r} ${r} 0 0 0 ${cx} ${cy - r}`}
          fill="none" stroke="var(--accent)" strokeOpacity={0.14 + i * 0.06} strokeWidth="1.25" />
      ))}
      <circle cx={cx} cy={cy} r="4" fill="var(--accent)" />
      <circle cx={cx + 120} cy={cy - 12} r="3.5" fill="var(--accent)" />
      <circle cx={cx + 82} cy={cy - 148} r="3.5" fill="var(--accent)" />
      <circle cx={cx + 210} cy={cy - 96} r="5" fill="var(--accent)" fillOpacity="0.9" />
      <path d={`M ${cx} ${cy} L ${cx + 210} ${cy - 96}`} stroke="var(--accent)"
        strokeOpacity="0.5" strokeWidth="1.25" strokeDasharray="3 4" />
    </svg>
  )
}

/* Retail — unified commerce node lattice */
function Grid() {
  const cols = 7, rows = 4, gx = 52, gy = 52, ox = 44, oy = 56
  const nodes = []
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) nodes.push([ox + c * gx, oy + r * gy])
  const hub = [ox + 3 * gx, oy + 1.5 * gy]
  return (
    <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" role="img">
      {nodes.map(([x, y], i) => (
        <line key={i} x1={hub[0]} y1={hub[1]} x2={x} y2={y}
          stroke="var(--accent)" strokeOpacity="0.1" strokeWidth="1" />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2.5" fill="var(--accent)" fillOpacity="0.4" />
      ))}
      <circle cx={hub[0]} cy={hub[1]} r="7" fill="var(--accent)" />
      <circle cx={hub[0]} cy={hub[1]} r="16" fill="none" stroke="var(--accent)" strokeOpacity="0.3" strokeWidth="1" />
    </svg>
  )
}
