
import {Container,Row,Col} from 'react-bootstrap';
import './css/ItemListContainer.css'

function ItemListContainer(){
    return(
        <Container className="home-container">
            <Row>
                <Col md={12}>
                    <h1>¡Bienvenido a la tienda!</h1>
                </Col>
            </Row>
        </Container>
    );
}

export default ItemListContainer;