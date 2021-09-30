import {Container, Row,Col, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function NotFound(){
    return (
        <Container className="home-container">
            <Row>
                <Col md={12}>
                    <h1>El producto buscado no existe.</h1>
                    <Link to={`/productos`} className="button-add-cart"><Button variant="light" className="button-add-cart">Volver a la Tienda</Button></Link>
                </Col>
            </Row>
        </Container>
    );
}

export default NotFound;