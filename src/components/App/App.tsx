import {motion} from 'framer-motion'
import Cursor from '../Cursor/Cursor';

import './app.scss';

const introVariant = {
    initial: {
    },
    animate: {
        opacity: [0, .5, 1],
        y: [60, -30, 0],
        transition: {
            y: {
                times: [0, .9, 1],
                duration: 1,
            },
            opacity: {
                times: [0, .9, 1],
                duration: 1,
            },
            duration: 1
        }
    }
}

const App = () => {
    return (
        <div className="AppMain">
            <motion.div className="mainText" variants={introVariant} initial="initial" animate="animate">
                <h1 className='ch1'>Hi. STANLEY</h1>
            </motion.div>
            <Cursor />
        </div>
    )
}

export default App;