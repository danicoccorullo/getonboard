import {Container,Row,Col,Button} from 'react-bootstrap';
import {CartContext} from './CartContext';
import {useContext} from 'react'
import './css/Cart.css';

function Cart(){

    const { webCart,setWebCart, cartItems } = useContext(CartContext);

    return (
        <Container className="home-container">
        <Row>
            <Col md={12}>
                <h1>Carrito</h1>
            </Col>
        </Row>
        <Row className="cartInfoContainer">
            <Col md={4}><p>Nombre</p></Col>
            <Col md={4}><p>Cantidad</p></Col>
            <Col md={4}><p>Precio Total</p></Col>
            {webCart.map(cartProd => (
                <>
                <Col md={4}><p>{cartProd.name}</p></Col>
                <Col md={4}><p>{cartProd.qty}</p></Col>
                <Col md={4}><p>${Number(cartProd.price)*Number(cartProd.qty)}</p></Col>
                </>
            ))}
        </Row>
    </Container>
    );
}

export default Cart;