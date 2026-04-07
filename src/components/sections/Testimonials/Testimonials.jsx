import React from 'react';
import { motion } from 'framer-motion';
import { Star } from '@phosphor-icons/react';
import SectionHeader from '../../ui/SectionHeader';
import { testimonials } from '../../../data/testimonials';
import './Testimonials.css';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1, 
        transition: { staggerChildren: 0.2 } 
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Testimonials = () => {
    return (
        <section className="container">
            <SectionHeader 
                title="Loved by Industry Leaders" 
                subtitle="Don't just take our word for it. Here is what our partners have to say." 
            />
            <motion.div 
                className="testimonials-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {testimonials.map((t) => (
                    <motion.div 
                        key={t.name} 
                        variants={cardVariants} 
                        className="testimonial-card"
                        whileHover={{ y: -5, transition: { duration: 0.25 } }}
                    >
                        <div className="stars">
                            {Array.from({ length: t.rating }, (_, i) => (
                                <Star key={i} weight="fill" />
                            ))}
                        </div>
                        <p className="quote">"{t.quote}"</p>
                        <div className="client-info">
                            <div className="client-avatar">{t.initials}</div>
                            <div className="client-details">
                                <h5>{t.name}</h5>
                                <p>{t.role}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Testimonials;
