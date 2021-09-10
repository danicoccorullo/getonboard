import {Container,Row,Col} from 'react-bootstrap';
import './css/ItemListContainer.css';
import ItemList from './ItemList';
import Loader from './Loader';
import {useParams, useLocation} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { getData } from './firebase';
import { collection, getDocs } from 'firebase/firestore';


function ItemListContainer(props){
    const [prods, setProds] = useState([]);
    const [currentProds, setCurrentProds] = useState([]);
    const [pageLoading, setPageLoading] = useState(true);
    let location = useLocation();

    let greeting = props.greeting;
    let { category } = useParams();
    if (category) {
        greeting = category;
    }

    useEffect(() => {
        const getProds = async() => {
            setPageLoading(true);
            const prodsCollection = collection(getData(),'products');
            const prodsSnapshot = await getDocs(prodsCollection);
            const prodsList = prodsSnapshot.docs.map( doc => ({id: doc.id, ...doc.data()}));
            if (category){
                const catProds = prodsList.filter((item) => item.category === category);
                setCurrentProds(catProds);
            } else {
                setCurrentProds(prodsList);
            }
            setPageLoading(false);
            setProds(prodsList);
        }
        getProds();
    }, []);

    useEffect(() => {
        if (category){
            const catProds = prods.filter((item) => item.category === category);
            setCurrentProds(catProds);
        } else {
            setCurrentProds(prods);
        }
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
                    <ItemList items={currentProds} />
                </Row>
            </Container>
        );
    }
}

export default ItemListContainer;