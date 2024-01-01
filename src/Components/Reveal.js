import React, {useEffect, useRef} from 'react'
import {motion, useAnimation, useInView} from 'framer-motion'

export const Reveal = ({children, overflowVal = 'hidden'}) => {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if (inView) {
            mainControls.start("visible");
            slideControls.start("visible");
        }
    }, [inView, mainControls, slideControls]);

    const heroVariants = {
        hidden: {
            opacity: 0,
            y: 55,
        },
        visible: {
            opacity: 1,
            y: 0,
        }
    };

    const sliderVariants = {
        hidden: {
            left: 0
        },
        visible: {
            left: "100%"
        },
    }

    return (
        <div ref={ref} className="motionDiv" style={{ position:"relative", overflow:overflowVal, width: "100%", backgroundColor:'transparent', borderRadius: '2rem'}}>
            <motion.div
                initial="hidden"
                animate={mainControls}
                variants={heroVariants}
                transition={{ duration: 0.5, delay: 0.35 }}
                style={{ backgroundColor:'transparent' }}
            >
                {children}
            </motion.div>
            <motion.div
                initial="hidden"
                animate={slideControls}
                variants={sliderVariants}
                transition={{ duration: 0.5, ease: "easeIn" }}
                style={{
                    position: "absolute",
                    top: 4,
                    bottom: 4,
                    left: 0,
                    right: 0,
                    borderRadius:'2rem',
                    background: "var(--main-light-blue)",
                    zIndex:2,
                }}
            />
        </div>
    )
};
