import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartContextProvider({ children }) {
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const [productSelected, setProductSelected] = useState({});
    const [cart, setCart] = useState([]);

    const cartQuantity = cart.length;

    const openProductDetail = () =>  setIsProductDetailOpen(true);
    const closeProductDetail = () =>  setIsProductDetailOpen(false);
    const setProductToShow = (product) => setProductSelected(product);

    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    };
    
    console.log(cart);
 
    return (
        <CartContext.Provider value={{
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            productSelected,
            setProductToShow,
            cart,
            addToCart,
            cartQuantity,
        }}>
            {children}
        </CartContext.Provider>
    );
}
