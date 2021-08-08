import ItemCount from './ItemCount';
import {Col} from 'react-bootstrap';
import './css/Item.css';

function Item(props){

    const {id, pictureURL, name, description, price} = props;

    return(
        <Col md={4} xs={12} id={"producto-" + id} className="product-container">
            <div className="product-inner">
                <img alt={"product-image-"+id} width="100%" src={pictureURL} />
                <div className="product-title">{name}</div>
                <div className="product-description">{description}</div>
                <div className="product-price">${price}</div>
                <ItemCount initial={1} stock={8} />
            </div>
        </Col>
    )
}

export default Item;