import './topbar.scss';

import { ReactComponent as BrandIcon } from "../../images/pizzarous-01.svg";
import { Link } from 'react-router-dom';

export const TopBar = () => {
  return (
    <div className="TopBar">
        <div className="TopBar__Logo">
            <BrandIcon width="70px" />
        </div>
        <div className="TopBar__name">
          <div>Pizzarous!</div>
          <div className="TopBar__links">
            <div><Link to="/home">home</Link></div>
            <div><Link to="/base">base</Link></div>
            <div><Link to="/toppings">toppings</Link></div>
            <div><Link to="/order">order</Link></div>
          </div>
        </div>
    </div>
  )
}