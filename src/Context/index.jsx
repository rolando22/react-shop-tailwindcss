import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartContextProvider({ children }) {
    const [count, setCount] = useState(0);
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const [productSelected, setProductSelected] = useState({});

    const incrementCount = () => setCount(prevState => ++prevState);
    const openProductDetail = () =>  setIsProductDetailOpen(true);
    const closeProductDetail = () =>  setIsProductDetailOpen(false);
    const setProductToShow = (product) => setProductSelected(product);
 
    return (
        <CartContext.Provider value={{
            count,
            incrementCount,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            productSelected,
            setProductToShow,
        }}>
            {children}
        </CartContext.Provider>
    );
}
