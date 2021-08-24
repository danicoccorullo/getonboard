import {Container,Row,Col} from 'react-bootstrap';
import './css/ItemListContainer.css';
import ItemList from './ItemList';
import Loader from './Loader';
import { productos } from './data/productsData';
import {useParams, useLocation} from 'react-router-dom';
import React, { useState, useEffect } from 'react';


function ItemListContainer(props){
    const [items, setItems] = useState([]);
    const [pageLoading, setPageLoading] = useState(true);
    let location = useLocation();

    let greeting = props.greeting;
    let { category } = useParams();
    if (category) {
        greeting = category;
    }

    useEffect(() => {
        setPageLoading(true);
        new Promise((resolve,reject) => {
            if (category){
                setTimeout(() => resolve(productos.filter((item) => item.category === category)),2000);
            } else {
                setTimeout(() => resolve(productos),2000);
            }
        })
        .then((dataProdsResolve) => {
            setItems(dataProdsResolve);
            setPageLoading(false);
        })
        .catch((errorProds) => {
            console.log("Error en la carga de datos", errorProds);
        });
    }, [location]);

    if(pageLoading){
        return (
            <Loader />
        );
    }
    else {
        return(
            <Container className="home-container">
                <Row>
                    <Col md={12}>
                        <h1>{greeting}</h1>
                    </Col>
                </Row>
                <Row>
                    <ItemList items={items} />
                </Row>
            </Container>
        );
    }
}

export default ItemListContainer;