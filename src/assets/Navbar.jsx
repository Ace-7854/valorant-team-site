import { Link } from 'react-router-dom';
import aqMainLogo from '../assets/images/AQ_MAIN_LOGO.png';
import aqBlueLogo from '../assets/images/AQ_BLUE_LOGO.png';

export default function Navbar() {
    return (
        <nav className="navbar">
            {/* Left Side: Branding */}
            <div className="nav-brand">
                <Link to="/">
                    <figure className="logo-container">
                        <img src={aqMainLogo} alt="VLRNT Team Logo" />
                    </figure>
                </Link>
            </div>
            
            {/* Center: Navigation Links */}
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/roster">Roster</Link></li>
            </ul>

            {/* Right Side: Quick Action Button */}
            <div className="nav-actions">
                <a href="https://discord.gg/VgsE6gJzeT" target="_blank" rel="noopener noreferrer"><button className="cta-button">Join Discord</button></a>
            </div>
        </nav>
    );
}