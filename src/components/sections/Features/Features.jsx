import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Infinity, RocketLaunch, Handshake } from '@phosphor-icons/react';
import SectionHeader from '../../ui/SectionHeader';
import './Features.css';

const features = [
    { icon: Brain, title: 'AI-First Approach', description: 'We integrate intelligent AI solutions to give your business a competitive edge.' },
    { icon: Infinity, title: 'End-to-End Delivery', description: 'From strategic planning to final deployment, we handle every single step.' },
    { icon: RocketLaunch, title: 'Fast Turnaround', description: 'Optimized workflows mean we deliver high-quality solutions rapidly.' },
    { icon: Handshake, title: 'Dedicated Support', description: 'Ongoing maintenance and support to ensure your tools always perform well.' },
];

const Features = () => {
    return (
        <section id="about" className="highlights-section">
            <div className="container">
                <SectionHeader 
                    title="Why Choose Webfluence" 
                    subtitle="We are not just an agency; we are your dedicated technology partners." 
                />
                <div className="features-grid">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div 
                                key={feature.title}
                                className="feature-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="feature-icon"><Icon /></div>
                                <h4>{feature.title}</h4>
                                <p>{feature.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Features;
