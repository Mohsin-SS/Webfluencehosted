import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Shared Webfluence logo. Uses /public/WFLogo.png.
 * Inverted in dark mode via CSS so the same PNG works on both themes.
 */
const Logo = ({ onClick }) => {
    return (
        <Link to="/" className="logo" onClick={onClick} aria-label="Webfluence — Home">
            <img
                src="/WFLogo.png"
                alt="Webfluence"
                className="logo__img"
                width="44"
                height="44"
            />
        </Link>
    );
};

export default Logo;
