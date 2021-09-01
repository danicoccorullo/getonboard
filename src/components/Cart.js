import {Container,Row,Col,Button} from 'react-bootstrap';
import {CartContext} from './CartContext';
import {useContext} from 'react'
import './css/Cart.css';

function Cart(){

    const { webCart, setWebCart, cartItems } = useContext(CartContext);
    
    let itemCartId = 0;

    const removeItem = (prodId) => {
        const newCart = webCart.filter(prod => prod.productId != prodId)
        console.log(newCart);
        setWebCart(newCart);
    }

    return (
        <Container className="home-container">
        <Row>
            <Col md={12}>
                <h1>Carrito</h1>
            </Col>
        </Row>
        <Row className="cartInfoContainer">
            <Col md={3}><p>Nombre</p></Col>
            <Col md={3}><p>Cantidad</p></Col>
            <Col md={3}><p>Precio Total</p></Col>
            <Col md={3}><p></p></Col>
            {webCart.map((cartProd,index) => (
                <>
                <Col md={3}><p>{cartProd.name}</p></Col>
                <Col md={3}><p>{cartProd.qty}</p></Col>
                <Col md={3}><p>${Number(cartProd.price)*Number(cartProd.qty)}</p></Col>
                <Col md={3}><Button onClick={() => removeItem(cartProd.productId)}>Quitar</Button></Col>
                </>
            ))}
        </Row>
    </Container>
    );
}

export default Cart;