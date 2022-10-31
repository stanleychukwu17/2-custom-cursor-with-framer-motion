import {useEffect, useCallback, useRef} from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import './Cursor.scss'


export default function Cursor() {
    const cursorRef = useRef<HTMLDivElement>({} as HTMLDivElement)
    const defX = useMotionValue<number>(-50)
    const defY = useMotionValue<number>(-50)
    const transition = {duration:0.1, bounce: 0}
    const x = useSpring(defX, transition)
    const y = useSpring(defY, transition)
    const scale = useMotionValue<number>(1)


    const updateMousePosition = useCallback((event: MouseEvent) => {
        const mousePositionX = event.clientX - 10
        const mousePositionY = event.clientY - 10
        const targetElement = event.target as HTMLElement

        defX.set(mousePositionX);
        defY.set(mousePositionY);

        // console.log(event.target, targetElement.classList)
        if (targetElement.classList.contains('ch1')) {
            scale.set(10)
            cursorRef.current.classList.add('inAction')
        } else {
            scale.set(1)
            cursorRef.current.classList.remove('inAction')
        }
    }, [defX, defY, scale])
    

    // adds the event listener that will update the x and y position of the custom cursor
    useEffect(() => {
        window.addEventListener("mousemove", updateMousePosition)

        return () => {
            window.removeEventListener("mousemove", updateMousePosition)
        }
    }, [updateMousePosition])
    

    return (
        <motion.div className="cursor" ref={cursorRef} style={{x, y, scale}}></motion.div>
    )
}
