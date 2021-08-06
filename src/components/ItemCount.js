import React, { useState, useEffect } from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import './css/ItemCount.css';

function ItemCount({stock, initial}){

    const[itemCount, setItemCount] = useState(initial);
    const[currentStock, setCurrentStock] = useState(stock);
    const[addToCartMessage, setAddToCartMessage] = useState("");
    const [addedItems, setAddedItems] = useState(false);
    let itemsAgregados = 0;

    function onAdd(){
        if(itemCount > currentStock){
            setAddedItems(false);
            setAddToCartMessage(`No hay stock suficiente. Stock disponible: ${currentStock}`);
            console.log(addToCartMessage);
        } else {
            itemsAgregados = itemCount;
            setAddedItems(true);
            setAddToCartMessage(`Se agregaron ${itemsAgregados} item(s) al carrito con éxito.`);
            setItemCount(initial);
            setCurrentStock(currentStock - itemsAgregados);
            console.log(addToCartMessage);
        }
    }

    return (
        <Container>
            <Row>
                <Col md={4} className="item-count-container">
                    <Button variant="light" className="button-sub" text="-" onClick={() => setItemCount(itemCount - 1)}>-</Button>
                    <div className="count-display">{itemCount}</div>
                    <Button variant="light" className="button-add" text="+" onClick={() => setItemCount(itemCount + 1)}>+</Button>
                    <Button variant="light" className="button-add-cart" onClick={() => onAdd()}>Agregar al Carrito</Button>
                </Col>
            </Row>
            <Row>
                <Col md={4} className="item-count-container">
                    <div className={addedItems ? "add-to-cart-message success" : "add-to-cart-message error"}>{addToCartMessage}</div>
                </Col>
            </Row>
        </Container>
    );

}

export default ItemCount;