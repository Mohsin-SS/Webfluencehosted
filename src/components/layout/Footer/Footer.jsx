import React from 'react';
import { InstagramLogo, LinkedinLogo, WhatsappLogo } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import Logo from '../../ui/Logo';
import { footerCompanyLinks, footerServiceLinks } from '../../../data/navigation';
import './Footer.css';

const Footer = () => (
  <footer>
    <div className="footer__top-line" aria-hidden="true" />
    <div className="container">
      <div className="footer-grid">
        {/* Brand */}
        <div className="footer-brand">
          <Logo />
          <p>Empowering forward-thinking businesses with premium AI-powered websites, apps, and autonomous automation systems.</p>
          <div className="social-icons">
            <a href="#" aria-label="Instagram"><InstagramLogo size={20} /></a>
            <a href="#" aria-label="LinkedIn"><LinkedinLogo size={20} /></a>
            <a href="#" aria-label="WhatsApp"><WhatsappLogo size={20} /></a>
          </div>
        </div>

        {/* Company links */}
        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            {footerCompanyLinks.map(({ label, href }) => (
              <li key={label}><a href={href}>{label}</a></li>
            ))}
          </ul>
        </div>

        {/* Services links */}
        <div className="footer-links">
          <h4>Services</h4>
          <ul>
            {footerServiceLinks.map(({ label, href }) => (
              <li key={label}><a href={href}>{label}</a></li>
            ))}
          </ul>
        </div>

        {/* Product */}
        <div className="footer-links">
          <h4>Products</h4>
          <ul>
            <li>
              <Link to="/product" className="footer-product-link">
                Agentic Lead Manager
                <span className="footer-product-badge">New</span>
              </Link>
            </li>
          </ul>
          <div className="footer__contact-block">
            <h4>Contact</h4>
            <a href="mailto:webfluence.ai@gmail.com" className="footer__email">webfluence.ai@gmail.com</a>
            <a href="https://wa.me/923174945947" target="_blank" rel="noopener noreferrer" className="footer__phone">
              +92 317 4945947
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© 2026 Webfluence. All rights reserved.</p>
        <div className="footer-bottom__links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
