import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

/** Standard fade + rise reveal on scroll. */
export function Reveal({ children, as = 'div', delay = 0, y = 24, className, ...rest }) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}

/** Container that staggers its Reveal-style children. */
export function RevealGroup({ children, as = 'div', className, stagger = 0.08, ...rest }) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}

/** Item used inside RevealGroup. */
export function RevealItem({ children, as = 'div', y = 24, className, ...rest }) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}

export { EASE }
