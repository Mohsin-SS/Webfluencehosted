import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '../common/Reveal'
import './CTABand.css'

export default function CTABand() {
  return (
    <section className="cta-band section--sunk" aria-labelledby="cta-heading">
      <div className="container">
        <Reveal className="cta-band__inner">
          <h2 id="cta-heading" className="cta-band__title display">
            Tell us what has to be true in <em>six months.</em>
          </h2>
          <p className="cta-band__sub">
            We'll tell you honestly whether we're the right firm to get you there — and what it will take.
          </p>
          <div className="cta-band__actions">
            <Link to="/contact" className="btn btn--primary">
              Start a project <ArrowRight size={16} strokeWidth={1.5} />
            </Link>
            <span className="cta-band__meta mono">HELLO@WEBFLUENCE.TECH · SF &amp; NYC</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
