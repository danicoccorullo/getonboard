import {Container,Row,Col,Button} from 'react-bootstrap';
import {CartContext} from './context/CartContext';
import {useContext} from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import './css/Cart.css';

function Cart(){

    const { webCart, setWebCart, cartTotalItems, setCartTotalItems, cartTotalPrice, setCartTotalPrice} = useContext(CartContext);

    const removeItem = (prodId) => {
        const newCart = webCart.filter(prod => prod.productId !== prodId)
        const deleteItems = webCart.filter(prod => prod.productId === prodId);
        setWebCart(newCart);
        setCartTotalItems(cartTotalItems - deleteItems[0].qty);
        setCartTotalPrice(cartTotalPrice - (deleteItems[0].qty * deleteItems[0].price));
    }

    const clearCart = () => {
        const clear = [];
        setWebCart(clear);
        setCartTotalItems(0);
        setCartTotalPrice(0);
    }

    return (
        <Container className="home-container">
            <Row>
                <Col md={12}>
                    <h1>Carrito</h1>
                </Col>
            </Row>
            {(webCart.length > 0) ? (
                    <div>
                    <Row className="cartInfoContainer">
                    <Col md={3}><h3>NOMBRE</h3></Col>
                    <Col md={3}><h3>CANTIDAD</h3></Col>
                    <Col md={3}><h3>PRECIO TOTAL</h3></Col>
                    <Col md={3}><h3></h3></Col>
                    {webCart.map((cartProd) => (
                        <>
                        <Col md={3}><p>{cartProd.name}</p></Col>
                        <Col md={3}><p>{cartProd.qty}</p></Col>
                        <Col md={3}><p>${Number(cartProd.price)*Number(cartProd.qty)}</p></Col>
                        <Col md={3}><Link onClick={() => removeItem(cartProd.productId)}><FontAwesomeIcon icon={faTrashAlt} /></Link></Col> 
                        </>
                    ))}
                </Row>
                <Row>
                    <Col md={{span:4,offset:8}} className="cartActionsContainer">
                        <div><h3>TOTAL: ${cartTotalPrice} </h3></div>
                        <Link to={`/checkout`} className="btn button-cart-checkout">Finalizar Compra</Link>
                        <Button onClick={clearCart} variant="light" className="button-add-cart">Vaciar Carrito</Button>
                    </Col>
                </Row>
                    </div>
                ) : (
                    <Row className="cartInfoContainer">
                    <Col md={12} className="cart-empty-msg">No hay productos en el carrito.</Col>
                    <Col md={12}>
                    <Link to={`/productos`} className="button-add-cart"><Button variant="light" className="button-add-cart">Volver a la Tienda</Button></Link>
                    </Col>
                </Row>
                )
            }
        </Container>
    );       
}

export default Cart;