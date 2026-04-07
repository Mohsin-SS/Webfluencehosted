import React from 'react';

/**
 * Shared WF. logo component used in Navbar and Footer.
 */
const Logo = ({ onClick }) => {
    return (
        <a href="#" className="logo" onClick={onClick}>
            <span className="wf">WF.</span>
            <span className="name">Webfluence</span>
        </a>
    );
};

export default Logo;
