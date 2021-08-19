import ItemCount from './ItemCount';
import {Container,Row,Col} from 'react-bootstrap';
import './css/ItemDetail.css';


function ItemDetail(props){

    const {id, pictureURL, name, description, category, price} = props;

    return(
        <Container>
            <Row id={"product-detail" + id}>
                <Col md={6} xs={12} className="product-container">
                    <div className="product-detail-inner">
                        <img alt={"product-image-"+id} width="100%" src={pictureURL} />
                    </div>
                </Col>
                <Col md={6} xs={12} className="product-container">
                    <div className="product-detail-inner product-detail-info">
                        <div className="product-detail-title">{name}</div>
                        <div className="product-price">${price}</div>
                        <div className="product-detail-description">{description}</div>
                        <div className="product-detail-category"><span>Categoria:</span> {category}</div>
                        <div className="product-detail-count">
                            <ItemCount initial={1} stock={8} />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ItemDetail;