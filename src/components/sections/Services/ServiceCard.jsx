import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable animated service card.
 */
const ServiceCard = ({ icon: Icon, title, description, variants }) => {
    return (
        <motion.div 
            variants={variants} 
            className="service-card"
            whileHover={{ y: -5, transition: { duration: 0.25 } }}
        >
            <div className="service-icon"><Icon /></div>
            <h4>{title}</h4>
            <p>{description}</p>
        </motion.div>
    );
};

export default ServiceCard;
