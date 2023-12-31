import {useRef, useState, useEffect } from "react";
import {FaTimes, FaBars} from "react-icons/fa"
import {motion, AnimatePresence} from "framer-motion"
export default function Navbar() {
    const navRef = useRef();
    const [isScrolling, setIsScrolling] = useState(false);

    const scrolledOff = () => {
        if (window.scrollY >= window.innerHeight && window.innerWidth > 1100) {
            setIsScrolling(true);
        } else {
            setIsScrolling(false);
        }
    }
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    useEffect(() => {
        window.addEventListener('scroll', scrolledOff);
        return () => {
            window.removeEventListener('scroll', scrolledOff);
        };
    }, [isScrolling]);

    const navAnimationVariants = {
        initial: {
            y: -50,
            opacity: 0,
          },
          animate: {
            y: 15,
            opacity: 1,
            transition: {
              type: "spring",
              damping: 10,
              stiffness: 100,
            },
          },
          exit: {
            y: -50,
            opacity: 0,
          },
    };

    function FixedNav(props) {
        return (
                <header>
                    <h2><a href="/" className="site-title">Bryan Kim</a></h2>
                    <nav className="nav" ref={props.navRef}>
                        <ul>
                            <li>
                                <a href="#about" onClick={props.showNavbar}>About</a>
                            </li>
                            <li>
                                <a href="#skills" onClick={props.showNavbar}>Skills</a>
                            </li>
                            <li>
                                <a href="#projects" onClick={props.showNavbar}>Projects</a>
                            </li>
                            <li>
                                <a href="/contact" onClick={props.showNavbar}>Contact Me</a>
                            </li>
                        </ul>
                        <button className="nav-btn nav-close-btn" onClick={props.showNavbar}>
                            <FaTimes/>
                        </button>
                    </nav>
                    <button className="nav-btn" onClick={props.showNavbar}>
                        <FaBars/>
                    </button>
                </header>
        );
    }

    function ScrollingNav({isScrolling}) {
        return (
        <motion.div
            initial='initial'
            animate={isScrolling ? 'animate' : 'initial'}
            exit='exit'
            variants={navAnimationVariants}
            className="scrollingNav"
        >
            <ul>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="/contact">Contact Me</a>
                </li>
            </ul>
        </motion.div>
        );
    }

    return (
        <>
         <FixedNav navRef={navRef} showNavbar={showNavbar}/>
        <AnimatePresence>
            {isScrolling && <ScrollingNav isScrolling={isScrolling}/>}
        </AnimatePresence>
        </>
    )
}