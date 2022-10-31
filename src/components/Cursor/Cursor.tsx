import {useEffect, useCallback} from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import './Cursor.scss'


export default function Cursor() {
    const defX = useMotionValue<number>(-50)
    const defY = useMotionValue<number>(-50)
    const transition = {duration:0.1, bounce: 0}
    const x = useSpring(defX, transition)
    const y = useSpring(defY, transition)


    const updateMousePosition = useCallback((event: MouseEvent) => {
        const mousePositionX = event.clientX - 10
        const mousePositionY = event.clientY - 10

        defX.set(mousePositionX);
        defY.set(mousePositionY);

        console.log(event.target)
    }, [defX, defY],
    )
    

    // adds the event listener that will update the x and y position of the custom cursor
    useEffect(() => {
        window.addEventListener("mousemove", updateMousePosition)

        return () => {
            window.removeEventListener("mousemove", updateMousePosition)
        }
    }, [updateMousePosition])
    

    return (
        <motion.div className="cursor" style={{x, y}}></motion.div>
    )
}
