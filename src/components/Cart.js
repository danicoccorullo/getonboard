import {Container,Row,Col} from 'react-bootstrap';

function Cart(){

    return (
        <Container className="home-container">
        <Row>
            <Col md={12}>
                <h1>Carrito</h1>
            </Col>
        </Row>
    </Container>
    );
}

export default Cart;