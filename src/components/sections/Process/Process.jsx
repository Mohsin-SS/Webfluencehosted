import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../../ui/SectionHeader';
import './Process.css';

const steps = [
    { number: 1, title: 'Discovery Call', description: 'We understand your business goals and map out the exact digital solution you need.' },
    { number: 2, title: 'We Build & Integrate', description: 'Our team designs, develops, and integrates the technology seamlessly into your workflow.' },
    { number: 3, title: 'You Grow', description: 'Launch your new automated tools and watch your efficiency and revenue increase.' },
];

const Process = () => {
    return (
        <section className="container">
            <SectionHeader 
                title="How It Works" 
                subtitle="Our streamlined process ensures transparency and fast results." 
            />
            
            <div className="process-flow">
                {steps.map((step, index) => (
                    <motion.div 
                        key={step.number}
                        className="process-step"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div className="step-number">{step.number}</div>
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Process;
