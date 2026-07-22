import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Layout from '../../components/Layout'
import usePageMeta from '../../hooks/usePageMeta'
import './NotFound.css'

export default function NotFound() {
  usePageMeta('Page not found — Webfluence', 'The page you were looking for does not exist.')
  return (
    <Layout cta={false}>
      <section className="notfound" aria-labelledby="nf-heading">
        <div className="container notfound__inner">
          <span className="eyebrow notfound__code">404</span>
          <h1 id="nf-heading" className="notfound__title display">This page shipped to nowhere.</h1>
          <p className="notfound__lead">
            The link is broken or the page has moved. Everything that still exists is one click away.
          </p>
          <Link to="/" className="btn btn--primary notfound__btn">
            Back home <ArrowRight size={16} strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </Layout>
  )
}
