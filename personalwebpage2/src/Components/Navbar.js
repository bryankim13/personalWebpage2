import {useRef} from "react";
import {FaTimes, FaBars} from "react-icons/fa"
export default function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    const closeNavWhenResponsive = () => {
        console.log(navRef.current.classList['value'])
        if (navRef.current.classList['value'] === "nav responsive_nav") {
            navRef.current.classList.toggle("responsive_nav");
        }
    }

    return <header>
        <h2><a href="/" className="site-title">Bryan Kim</a></h2>
        <nav className="nav" ref={navRef}>
            <ul>
                <li>
                    <a href="#about" onClick={closeNavWhenResponsive}>About</a>
                </li>
                <li>
                    <a href="/experience" onClick={closeNavWhenResponsive}>Experience</a>
                </li>
                <li>
                    <a href="/projects" onClick={closeNavWhenResponsive}>Projects</a>
                </li>
                <li>
                    <a href="/contact" onClick={closeNavWhenResponsive}>Contact Me</a>
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