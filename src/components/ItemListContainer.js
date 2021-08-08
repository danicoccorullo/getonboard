
import {Container,Row,Col} from 'react-bootstrap';
import './css/ItemListContainer.css'
import ItemList from './ItemList'

function ItemListContainer(props){
    let greeting = props.greeting;
    return(
        <Container className="home-container">
            <Row>
                <Col md={12}>
                    <h1>{greeting}</h1>
                </Col>
            </Row>
            <Row>
                <ItemList />
            </Row>
        </Container>
    );
}

export default ItemListContainer;