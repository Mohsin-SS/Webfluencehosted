import { motion } from 'framer-motion'
import { EASE } from './Reveal'
import './PageHero.css'

/** Consistent inner-page hero: eyebrow, H1, optional lead paragraph. */
export default function PageHero({ eyebrow, title, lead, children, id = 'page-heading' }) {
  return (
    <section className="page-hero" aria-labelledby={id}>
      <div className="container">
        <motion.p
          className="eyebrow page-hero__eyebrow"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          id={id}
          className="page-hero__title display"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.08 }}
        >
          {title}
        </motion.h1>
        {lead && (
          <motion.p
            className="page-hero__lead"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
          >
            {lead}
          </motion.p>
        )}
        {children}
      </div>
    </section>
  )
}
