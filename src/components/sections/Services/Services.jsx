import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../../ui/SectionHeader';
import ServiceCard from './ServiceCard';
import { serviceColumns } from '../../../data/services';
import './Services.css';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Services = () => {
    return (
        <section id="services" className="container">
            <SectionHeader 
                title="Our Core Services" 
                subtitle="We combine cutting-edge technology with premium design to deliver scalable digital solutions." 
            />
            
            <motion.div 
                className="services-layout"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {serviceColumns.map((column) => (
                    <div className="service-column" key={column.title}>
                        <h3 className="column-title">{column.title}</h3>
                        <div className="service-column-cards">
                            {column.services.map((service) => (
                                <ServiceCard 
                                    key={service.title}
                                    icon={service.icon}
                                    title={service.title}
                                    description={service.description}
                                    variants={itemVariants}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </motion.div>
        </section>
    );
};

export default Services;
