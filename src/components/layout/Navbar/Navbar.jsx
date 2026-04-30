import React, { useState } from 'react';
import { List, X } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import Logo from '../../ui/Logo';
import useScrollPosition from '../../../hooks/useScrollPosition';
import { navLinks } from '../../../data/navigation';
import './Navbar.css';

const Navbar = () => {
    const scrolled = useScrollPosition(50, 100);
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => setMenuActive(!menuActive);
    const closeMenu = () => setMenuActive(false);

    return (
        <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
            <div className="container nav-container">
                <Logo onClick={closeMenu} />
                <div className={`nav-links ${menuActive ? 'active' : ''}`}>
                    {navLinks.map(({ label, href }) => {
                        const isRoute = href.startsWith('/');
                        if (isRoute) {
                            return (
                                <Link
                                    key={href}
                                    to={href}
                                    className={`nav-link nav-link--product`}
                                    onClick={closeMenu}
                                >
                                    {label}
                                </Link>
                            );
                        }
                        return (
                            <a key={href} href={href} className="nav-link" onClick={closeMenu}>
                                {label}
                            </a>
                        );
                    })}
                    <a href="#contact" className="btn btn-primary nav-cta" onClick={closeMenu}>
                        Get a Free Consultation
                    </a>
                </div>
                <button className="mobile-btn" aria-label="Toggle menu" onClick={toggleMenu}>
                    {menuActive ? <X weight="bold" /> : <List weight="bold" />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;

