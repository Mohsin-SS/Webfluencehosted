import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable animated section header.
 * @param {{ title: string, subtitle: string }} props
 */
const SectionHeader = ({ title, subtitle }) => {
    return (
        <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
        >
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </motion.div>
    );
};

export default SectionHeader;
