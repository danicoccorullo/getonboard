import ItemCount from './ItemCount';
import {Container,Row,Col} from 'react-bootstrap';
import './css/ItemDetail.css';
import {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import {CartContext} from './context/CartContext';

function ItemDetail(props){

    const {id, pictureURL, name, description, category, price, stock} = props;
    const [items, setItems] = useState(0);

    const { webCart, setWebCart, cartTotalItems, setCartTotalItems, cartTotalPrice, setCartTotalPrice } = useContext(
        CartContext
      );

    const addItem = () => {
        const cartVar = [...webCart];
        const prodInfo = {'productId': id, 'name': name, 'price': price, 'qty': items}
        setCartTotalItems(cartTotalItems + items);
        setCartTotalPrice(cartTotalPrice + price*items);
        let isInCart = false; 
        cartVar.map(cartItems => {
            if(cartItems['productId'] === prodInfo['productId']) {
                cartItems['qty'] = cartItems['qty'] + items;
                isInCart = true;
            }}
        );
        if(!isInCart){
            cartVar.push(prodInfo);
        }
        setWebCart(cartVar);
    }

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
                            <ItemCount items={items} stock={stock} onAdd={setItems}/>
                            <CartContext.Provider value={{items, setItems}}>
                                {items > 0 && <Link to={`/cart`} className="button-checkout" onClick={addItem}>Agregar al Carrito</Link>}
                            </CartContext.Provider>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ItemDetail;