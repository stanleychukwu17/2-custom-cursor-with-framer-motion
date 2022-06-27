import { Link } from 'react-router-dom'
import './Base.scss'

export const Base = () => {
    return (
        <div className='BaseMain'>
            <div className="BaseMain__Top">Step 1: choose your base</div>
            <div className="BaseMain__Middle">
                <div>Classic</div>
                <div>Thin and Crispy</div>
                <div>Thick Crust</div>
            </div>
            <div className="BaseMain__Btn">
                <button><Link to="/toppings" >Next</Link></button>
            </div>
        </div>
    )
}