import {useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';
import {productos} from './data/productsData';
import Loader from './Loader';

function ItemDetailContainer(){

    const { id } = useParams();
    const [itemDetail, setItemDetail] = useState([]);
    const [pageLoading, setPageLoading] = useState(true);

    useEffect(() => {
        setPageLoading(true);
        new Promise((resolve,reject) => {
            setTimeout(() => resolve(productos.filter((item) => item.id === id)),2000);
        })
        .then((dataItemsResolve) => {
            setItemDetail(dataItemsResolve);
            setPageLoading(false);
        })
        .catch((errorItems) => {
            console.log("Error en la carga de datos", errorItems);
        });
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
                    itemDetail.map((itemD) => (
                        <ItemDetail key={itemD.id} id={itemD.id} name={itemD.name} description={itemD.description} price={itemD.price} category={itemD.category} pictureURL={itemD.pictureURL}/>
                    ))
                }
            </>                    
        );

    }
}

export default ItemDetailContainer;