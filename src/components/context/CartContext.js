import { createContext, useState } from "react";
import {productos} from '../data/productsData';

export const CartContext = createContext();

export const CartProvider = function({children}){
	const [products, setProducts] = useState(productos);
	const [webCart, setWebCart] = useState([]);
	const [cartTotalItems, setCartTotalItems] = useState(0);
	const [cartTotalPrice, setCartTotalPrice] = useState(0);

	return (
		<CartContext.Provider value={{ products, setProducts, webCart, setWebCart,cartTotalItems, setCartTotalItems, cartTotalPrice, setCartTotalPrice}}>
		{children}
		 </CartContext.Provider>
	);
}

export default CartContext;