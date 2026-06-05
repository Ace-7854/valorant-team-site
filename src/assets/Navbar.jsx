import { useState } from 'react';
import { Link } from 'react-router-dom';
import aqMainLogo from '../assets/images/AQ_MAIN_LOGO.png';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="navbar">
            {/* Left Side: Branding */}
            <div className="nav-brand">
                <Link to="/" onClick={closeMenu}>
                    <figure className="logo-container">
                        <img src={aqMainLogo} alt="Aquanticus Esports Logo" />
                    </figure>
                </Link>
            </div>

            {/* Center: Navigation Links */}
            <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
                <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                <li><Link to="/about" onClick={closeMenu}>About</Link></li>
                <li><Link to="/roster" onClick={closeMenu}>Roster</Link></li>
                {/* Discord button shown inside mobile menu */}
                <li>
                    <a
                        href="https://discord.gg/VgsE6gJzeT"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mobile-cta"
                        onClick={closeMenu}
                    >
                        Join Discord
                    </a>
                </li>
            </ul>

            {/* Right Side: Discord button (desktop only) */}
            <div className="nav-actions">
                <a href="https://discord.gg/VgsE6gJzeT" target="_blank" rel="noopener noreferrer">
                    <button className="cta-button">Join Discord</button>
                </a>
            </div>

            {/* Hamburger toggle — mobile only */}
            <button
                className={`hamburger${menuOpen ? ' open' : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    );
}