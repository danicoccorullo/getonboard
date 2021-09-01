import { createContext, useContext, useState } from "react";
import {productos} from './data/productsData';

export const CartContext = createContext();

export const CartProvider = function({children}){
	const [products, setProducts] = useState(productos);
	const [webCart, setWebCart] = useState([]);
	const [cartItems, setCartItems] = useState([]);

	return (
		<CartContext.Provider value={{ products, setProducts, webCart, setWebCart, cartItems, setCartItems }}>
		{children}
		 </CartContext.Provider>
	);
}

export default CartContext;