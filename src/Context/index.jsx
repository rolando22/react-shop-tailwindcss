import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartContextProvider({ children }) {
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const [productSelected, setProductSelected] = useState({});
    const [cart, setCart] = useState([]);
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);

    const cartQuantity = cart.length;

    const openProductDetail = () =>  setIsProductDetailOpen(true);
    const closeProductDetail = () =>  setIsProductDetailOpen(false);
    const openCheckoutSideMenu = () =>  setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () =>  setIsCheckoutSideMenuOpen(false);
    const setProductToShow = (product) => setProductSelected(product);

    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    };
    
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
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
        }}>
            {children}
        </CartContext.Provider>
    );
}
