import {useEffect, useCallback} from 'react'
import { motion, useMotionValue } from 'framer-motion'
import './Cursor.scss'


export default function Cursor() {
    const x = useMotionValue<number>(-50);
    const y = useMotionValue<number>(-50)

    const updateMousePosition = useCallback(() => {
        const mousePosition = 0
    }, [],
    )
    

    useEffect(() => {

        return () => {
        }
    }, [])
    

    return (
        <motion.div className="cursor" style={{x, y}}></motion.div>
    )
}
