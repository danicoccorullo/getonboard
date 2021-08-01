
import {Container,Row,Col} from 'react-bootstrap';
import './css/ItemListContainer.css'

function ItemListContainer(props){
    return(
        <Container className="home-container">
            <Row>
                <Col md={12}>
                    <h1>{props.greeting}</h1>
                </Col>
            </Row>
        </Container>
    );
}

export default ItemListContainer;