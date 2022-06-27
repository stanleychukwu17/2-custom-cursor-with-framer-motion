import { Link } from 'react-router-dom'
import './Home.scss'

export const Home = () => {
    return (
        <div className='HomeP'>
            <div className="">Welcome to pizzarous!</div>
            <div className="">
                <button>
                    <Link to="/base">Create your pizza</Link>
                </button>
            </div>
        </div>
    )
}