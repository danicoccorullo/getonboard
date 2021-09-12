import {Container,Row,Col} from 'react-bootstrap';
import './css/ItemListContainer.css';
import ItemList from './ItemList';
import Loader from './Loader';
import {useParams, useLocation} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { getData } from './firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';


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
            setPageLoading(false);
            setProds(prodsList);
            if (category){
                const prodsCategory = query(prodsCollection, where("category", "==", category));
                const prodsCategorySnapshot = await getDocs(prodsCategory);
                const prodsCategoryList = prodsCategorySnapshot.docs.map( doc => ({id: doc.id, ...doc.data()}));
                setCurrentProds(prodsCategoryList);
            } else {
                setCurrentProds(prodsList);
            }
        }
        getProds();
    }, [,location]);

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