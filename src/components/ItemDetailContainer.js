import {useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';
import Loader from './Loader';
import { getData } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

function ItemDetailContainer(){

    const { id } = useParams();
    const [prod, setProd] = useState([]);
    const [pageLoading, setPageLoading] = useState(true);

    useEffect(() => {
        const getProds = async() => {
            setPageLoading(true);
            const prodsCollection = collection(getData(),'products');
            const prodsSnapshot = await getDocs(prodsCollection);
            const prodsList = prodsSnapshot.docs.map( doc => ({id: doc.id, ...doc.data()}));
            const singleProd = prodsList.filter((item) => item.id === id);
            setPageLoading(false);
            setProd(singleProd);
        }

        getProds();
    }, []);


    if (pageLoading) {
        return(
            <Loader />
        );
    }
    else {
        return (
            <>
                {
                    prod.map((itemD) => (
                        <ItemDetail key={itemD.id} id={itemD.id} name={itemD.name} description={itemD.description} price={itemD.price} category={itemD.category} pictureURL={itemD.pictureURL} stock={itemD.stock}/>
                    ))
                }
            </>                    
        );

    }
}

export default ItemDetailContainer;