import React from 'react';
import { InstagramLogo, LinkedinLogo, WhatsappLogo } from '@phosphor-icons/react';
import Logo from '../../ui/Logo';
import { footerCompanyLinks, footerServiceLinks } from '../../../data/navigation';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Logo />
                        <p>Empowering forward-thinking companies with premium websites, apps, and intelligent AI automation.</p>
                    </div>
                    <div className="footer-links">
                        <h4>Company</h4>
                        <ul>
                            {footerCompanyLinks.map(({ label, href }) => (
                                <li key={label}><a href={href}>{label}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className="footer-links">
                        <h4>Services</h4>
                        <ul>
                            {footerServiceLinks.map(({ label, href }) => (
                                <li key={label}><a href={href}>{label}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className="footer-links">
                        <h4>Connect</h4>
                        <div className="social-icons">
                            <a href="#" aria-label="Instagram"><InstagramLogo /></a>
                            <a href="#" aria-label="LinkedIn"><LinkedinLogo /></a>
                            <a href="#" aria-label="WhatsApp"><WhatsappLogo /></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 Webfluence. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
