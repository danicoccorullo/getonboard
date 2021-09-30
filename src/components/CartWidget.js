import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {CartContext} from './context/CartContext';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import './css/Cart.css';

function CartWidget(){

    const { cartTotalItems } = useContext(CartContext);

    return (
        <>
            <Link className="cart-icon" to={`/cart`}><FontAwesomeIcon icon={faShoppingCart} /></Link>
            <div className="cart-item-count">{cartTotalItems}</div>
        </>
    );
}

export default CartWidget;