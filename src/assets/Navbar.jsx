import { browserRouter as Router, Routes, Route } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
    )
}