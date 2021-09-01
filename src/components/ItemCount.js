import {Container, Row, Col, Button} from 'react-bootstrap';
import './css/ItemCount.css';

function ItemCount({items, stock, onAdd}){

    const itemAdd = () => {
        if (items < stock) {
          onAdd(items + 1);
        }
      };
    
      const itemSub = () => {
        if (items > 0) {
            onAdd(items - 1);
          }
      };

    return (
        <Container>
            <Row>
                <Col className="item-count-container">
                    <Button variant="light" className="button-sub" text="-" onClick={itemSub}>-</Button>
                    <div className="count-display">{items}</div>
                    <Button variant="light" className="button-add" text="+" onClick={itemAdd}>+</Button>
                </Col>
            </Row>
        </Container>
    );

}

export default ItemCount;