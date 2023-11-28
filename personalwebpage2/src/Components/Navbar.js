import {useRef} from "react";
import {FaTimes, FaBars} from "react-icons/fa"
export default function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return <header>
        <h2><a href="/" className="site-title">Bryan Kim</a></h2>
        <nav className="nav" ref={navRef}>
            <ul>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/experience">Experience</a>
                </li>
                <li>
                    <a href="/projects">Projects</a>
                </li>
                <li>
                    <a href="/contact">Contact Me</a>
                </li>
            </ul>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                <FaTimes/>
            </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
            <FaBars/>
        </button>
    </header>
}