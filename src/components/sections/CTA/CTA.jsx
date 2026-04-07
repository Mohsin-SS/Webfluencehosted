import React from 'react';
import { motion } from 'framer-motion';
import './CTA.css';

const CTA = () => {
    return (
        <section id="contact" className="cta-banner">
            <motion.div 
                className="cta-content"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <h2>Ready to Automate and Scale Your Business?</h2>
                <p>Let's discuss how our custom digital solutions can help you achieve your goals.</p>
                <motion.a 
                    href="#" 
                    className="btn btn-primary btn-large"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                >
                    Book a Free Call Today
                </motion.a>
            </motion.div>
        </section>
    );
};

export default CTA;
