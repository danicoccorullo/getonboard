import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = function({children}){
	const [webCart, setWebCart] = useState([]);
	const [cartTotalItems, setCartTotalItems] = useState(0);
	const [cartTotalPrice, setCartTotalPrice] = useState(0);

	return (
		<CartContext.Provider value={{  webCart, setWebCart,cartTotalItems, setCartTotalItems, cartTotalPrice, setCartTotalPrice}}>
		{children}
		 </CartContext.Provider>
	);
}

export default CartContext;