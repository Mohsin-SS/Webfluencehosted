import React from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import './Stats.css';

const stats = [
    { value: 50, suffix: '+', label: 'Projects Delivered' },
    { value: 30, suffix: '+', label: 'Happy Clients' },
    { value: 99, suffix: '%', label: 'Client Satisfaction' },
    { value: 24, suffix: '/7', label: 'Support Available' },
];

const Counter = ({ target, suffix }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, target, {
                duration: 2,
                ease: [0.25, 0.46, 0.45, 0.94],
            });
            return controls.stop;
        }
    }, [isInView, target, count]);

    return (
        <span ref={ref} className="stat-value">
            <motion.span>{rounded}</motion.span>{suffix}
        </span>
    );
};

const Stats = () => {
    return (
        <section className="stats-section">
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <motion.div 
                            key={stat.label}
                            className="stat-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                        >
                            <Counter target={stat.value} suffix={stat.suffix} />
                            <p className="stat-label">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
