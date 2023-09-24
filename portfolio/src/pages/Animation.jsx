import { motion } from "framer-motion"
import {useLayoutEffect, useRef, useState} from 'react';

export const Animation = () => {
    const ref = useRef(null);

    const [idMotionWidth, setIdMotionWidth] = useState(0);
    const [idMotionHeight, setIdMotionHeight] = useState(0);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useLayoutEffect(() => {
        setIdMotionWidth(ref.current.offsetWidth);
        setIdMotionHeight(ref.current.offsetHeight);
        setScreenWidth(window.innerWidth)
    }, []);

    return (
        <div className="min-h-screen bg-green-300 text-left overflow-hidden p-0 m-0 mx-auto">
            <motion.div
            ref={ref}
            id="motion"
            className="bg-blue-400 w-fit"
            // initial={{ opacity: 0, scale: 0.5 }}
            // animate={{ opacity: 1, scale: 1 }}
            // transition={{ duration: 2.5 }}
            animate={{ x: (screenWidth / 2) - (idMotionWidth / 2) }}
            transition={{ type: "spring", stiffness: 300, duration: 2.5 }}
            >
                Transition test 
            </motion.div>
        </div>
    )
}