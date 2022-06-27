import { Link } from 'react-router-dom'
import '../Base/Base.scss'

export const Toppings = () => {
    return (
        <div className='BaseMain'>
            <div className="BaseMain__Top">Step 2: choose toppings</div>
            <div className="BaseMain__Middle">
                <div>Mushroom</div>
                <div>Pepper</div>
                <div>Onions</div>
            </div>
            <div className="BaseMain__Btn">
                <button><Link to="/order" >Order</Link></button>
            </div>
        </div>
    )
}