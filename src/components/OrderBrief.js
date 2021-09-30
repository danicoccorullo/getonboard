import {Row,Col} from 'react-bootstrap';
import {CartContext} from './context/CartContext';
import {useContext} from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

function OrderBrief(props){

    var colSize = 4;
    const { canRemove } = props; 

    if(canRemove) {
        colSize = 3;
    }

    const { webCart, setWebCart, cartTotalItems, setCartTotalItems, cartTotalPrice, setCartTotalPrice} = useContext(CartContext);

    const removeItem = (prodId) => {
        const newCart = webCart.filter(prod => prod.productId !== prodId)
        const deleteItems = webCart.filter(prod => prod.productId === prodId);
        setWebCart(newCart);
        setCartTotalItems(cartTotalItems - deleteItems[0].qty);
        setCartTotalPrice(cartTotalPrice - (deleteItems[0].qty * deleteItems[0].price));
    }

    return(
        <Row className="cartInfoContainer">
                    <Col md={colSize}><h3>NOMBRE</h3></Col>
                    <Col md={colSize}><h3>CANTIDAD</h3></Col>
                    <Col md={colSize}><h3>PRECIO TOTAL</h3></Col>
                    {(canRemove) ? <Col md={colSize}><h3></h3></Col> : ""} 
                    {webCart.map((cartProd) => (
                        <>
                        <Col md={colSize}><p>{cartProd.name}</p></Col>
                        <Col md={colSize}><p>{cartProd.qty}</p></Col>
                        <Col md={colSize}><p>${Number(cartProd.price)*Number(cartProd.qty)}</p></Col>
                        {(canRemove) ? <Col md={colSize}><Link onClick={() => removeItem(cartProd.productId)}><FontAwesomeIcon icon={faTrashAlt} /></Link></Col> : ""}
                        </>
                    ))}
                </Row>
    )

}

export default OrderBrief;
