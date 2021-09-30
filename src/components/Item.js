import {Col, Button} from 'react-bootstrap';
import './css/Item.css';
import {Link} from 'react-router-dom';

function Item(props){

    const {id, pictureURL, name, price} = props;

    return(
        <Col md={4} xs={12} id={"producto-" + id} className="product-container">
            <div className="product-inner">
                <img alt={"product-image-"+id} width="100%" src={pictureURL} />
                <div className="product-title">{name}</div>
                <div className="product-price">${price}</div>
                <Link to={`/item/${id}`} className="button-add-cart"><Button variant="light" className="button-add-cart">Ver Más</Button></Link>
            </div>
        </Col>
    )
}

export default Item;