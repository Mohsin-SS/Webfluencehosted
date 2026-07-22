import { Link } from 'react-router-dom'
import { PRACTICES, OFFICES } from '../../data/site'
import './Footer.css'

const COMPANY = [
  { label: 'Services', to: '/services' },
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
]

const COMPLIANCE = ['SOC 2 TYPE II', 'HIPAA-READY', 'GDPR & CCPA', '99.98% UPTIME SLA']

export default function Footer() {
  return (
    <footer className="footer section--dark">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__wordmark">Webfluence</span>
            <p className="footer__line">
              The engineering partner for companies that can't afford to get software wrong.
            </p>
          </div>
        </div>

        <div className="footer__grid">
          <nav className="footer__col" aria-label="Company">
            <h3 className="footer__heading">Company</h3>
            <ul>
              {COMPANY.map((l) => (
                <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
              ))}
            </ul>
          </nav>

          <nav className="footer__col" aria-label="Practices">
            <h3 className="footer__heading">Practices</h3>
            <ul>
              {PRACTICES.map((p) => (
                <li key={p.id}><Link to={`/services#${p.id}`}>{p.name}</Link></li>
              ))}
            </ul>
          </nav>

          <div className="footer__col">
            <h3 className="footer__heading">Offices</h3>
            <ul>
              {OFFICES.map((o) => (
                <li key={o.code} className="footer__office">
                  <span className="footer__office-city">{o.city}</span>
                  <span className="footer__office-addr mono">{o.address}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h3 className="footer__heading">Compliance</h3>
            <ul className="footer__compliance">
              {COMPLIANCE.map((c) => (
                <li key={c} className="mono">{c}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span className="footer__copy">© 2026 Webfluence, Inc. All rights reserved.</span>
          <div className="footer__legal">
            <a href="#" aria-label="Privacy policy">Privacy</a>
            <a href="#" aria-label="Terms of service">Terms</a>
          </div>
          <span className="footer__made mono">MADE IN SAN FRANCISCO</span>
        </div>
      </div>
    </footer>
  )
}
