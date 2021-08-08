import React, { useState, useEffect } from 'react';
import Item from './Item';

function ItemList(){

    const [items, setItems] = useState([]);

    useEffect(() => {
        new Promise((resolve,reject) => {
            const productos = [
                {
                    id: "0001",
                    name: "Funda para Celular Tokio",
                    description: "Funda suave de silicona de alta calidad, antiarañazos, resistente a la suciedad.",
                    price: "850",
                    pictureURL:"https://ae01.alicdn.com/kf/Hd9449647684645818650d6961b15b6a6i/Funda-de-tel-fono-de-primera-clase-para-iPhone-funda-trasera-de-silicona-suave-con-billete.jpg_640x640.jpg"
                },
                {
                    id: "0002",
                    name: "Funda de Pasaporte Travel",
                    description: "Funda de pasaporte de viaje, soporte de dirección de identificación de cuero Pu.",
                    price: "900",
                    pictureURL:"https://ae01.alicdn.com/kf/H7d9f843d5ef54298b71871f4d59dfb80Q/Funda-de-pasaporte-de-viaje-para-hombre-y-mujer-cartera-creativa-con-letras-soporte-de-direcci.jpg_Q90.jpg_.webp"
                },
                {
                    id: "0003",
                    name: "Almohada de viaje",
                    description: "Almohada de viaje en forma de U con partículas de espuma, varios colores.",
                    price: "1200",
                    pictureURL:"https://ae01.alicdn.com/kf/H98a7fa921a794807b35249e38fa7d3ccW/Almohada-de-viaje-en-forma-de-U-con-part-culas-de-espuma-supersuaves-coj-n-suave.jpg_Q90.jpg_.webp"
                },
                {
                    id: "0004",
                    name: "Toalla de microfibra",
                    description: "Toalla de microfibra para viajes, secado rápido, súper absorbente. Varios colores.",
                    price: "2000",
                    pictureURL:"https://ae01.alicdn.com/kf/HTB1Vr4KXtfvK1RjSszhq6AcGFXa7/Toallas-de-microfibra-para-viajes-deportivas-secado-r-pido-s-per-absorbentes-Ultra-suaves-ligeras-para.jpg_Q90.jpg_.webp"
                },
                {
                    id: "0005",
                    name: "Funda para valija",
                    description: "Cubierta protectora con elástico para equipaje con carrito. Varios modelos y colores",
                    price: "1400",
                    pictureURL:"https://ae01.alicdn.com/kf/Hd73e34bdf44f4edfbcc538670a826418E/Mundo-mapa-viaje-cubierta-protectora-para-maletas-equipaje-con-Trolley-cubierta-de-bolsa-de-los-hombres.jpg_Q90.jpg_.webp"
                },
                {
                    id: "006",
                    name: "Set organizadores de viaje",
                    description: "Set de 8 unidades para ropa y artículos de viaje. Varios colores.",
                    price: "1500",
                    pictureURL:"https://ae01.alicdn.com/kf/Hb474bf3a56154230bf98b0712dc21d3aE/Bolsa-de-almacenamiento-organizadora-de-maleta-de-8-piezas-bolsa-de-viaje-para-cosm-ticos-ropa.jpg_Q90.jpg_.webp"
                }
            ];
            setTimeout(() => resolve(productos),2000);
        })
        .then((dataResolve) => {
            setItems(dataResolve);
        })
        .catch((error) => {
            console.log("Error en la carga de datos", error);
        });
    }, []);

    return (
        <>
            {
            items.map((item) => (
                <Item key={item.id} id={item.id} name={item.name} description={item.description} price={item.price} pictureURL={item.pictureURL}/>                    
            ))
            }
        </>
    );

}

export default ItemList;