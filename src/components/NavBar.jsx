import { useState } from 'react';
import './NavBar.css';
import Logo from "../assets/Logo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navlogo">
                <img src={Logo} className="navLogo" alt="Invento_Logo" />
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                {['Home', 'Rulebook', 'Contact'].map((text, index) => (
                    <li key={index}>
                        <a href={text === 'Home' ? '/' : `/${text.toLowerCase()}`} onClick={() => setIsOpen(false)}>{text}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
