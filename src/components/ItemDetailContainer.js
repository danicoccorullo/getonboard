import {useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';

function ItemDetailContainer(){

    const [itemDetail, setItemDetail] = useState([]);

    useEffect(() => {
        const getItems = new Promise((resolve,reject) => {
            const productosDetalle = [
                {
                    id: "0001",
                    name: "Funda para Celular Tokio",
                    description: "Funda suave de silicona de alta calidad con billete de vuelo, antiarañazos, resistente a la suciedad. Modelos disponibles: iPhone 11, 12 Pro Max, 7, 8 Plus, X, XR, XS Max, SE2.",
                    price: "850",
                    category: "Accesorios",
                    pictureURL:"https://ae01.alicdn.com/kf/Hd9449647684645818650d6961b15b6a6i/Funda-de-tel-fono-de-primera-clase-para-iPhone-funda-trasera-de-silicona-suave-con-billete.jpg_640x640.jpg"
                }
            ];
            setTimeout(() => resolve(productosDetalle),2000);
        })
        .then((dataItemsResolve) => {
            setItemDetail(dataItemsResolve);
        })
        .catch((errorItems) => {
            console.log("Error en la carga de datos", errorItems);
        });
    }, []);

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

export default ItemDetailContainer;