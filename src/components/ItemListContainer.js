
import {Container,Row,Col} from 'react-bootstrap';
import './css/ItemListContainer.css'
import ItemCount from './ItemCount'

function ItemListContainer(props){
    let greeting = props.greeting;
    return(
        <Container className="home-container">
            <Row>
                <Col md={12}>
                    <h1>{greeting}</h1>
                    <ItemCount initial={1} stock={8} />
                </Col>
            </Row>
        </Container>
    );
}

export default ItemListContainer;