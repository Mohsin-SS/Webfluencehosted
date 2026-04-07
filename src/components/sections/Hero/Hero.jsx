import React from 'react';
import { motion } from 'framer-motion';
import ParticleCanvas from './ParticleCanvas';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <ParticleCanvas />
            <div className="container hero-content">
                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    We Build the Digital Tools That Grow Your Business
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Webfluence is an AI-powered digital solutions agency. We transform your ideas into intelligent, high-performing websites and automated workflows that scale.
                </motion.p>
                <motion.div 
                    className="hero-btns"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <a href="#services" className="btn btn-primary">Explore Our Services</a>
                    <a href="#work" className="btn btn-ghost">See Our Work</a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
