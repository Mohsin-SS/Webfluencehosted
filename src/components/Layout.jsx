import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import CTABand from './CTABand/CTABand'

/** Shared page shell: skip link, nav, main landmark, optional CTA band, footer. */
export default function Layout({ children, cta = true }) {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">{children}</main>
      {cta && <CTABand />}
      <Footer />
    </>
  )
}
