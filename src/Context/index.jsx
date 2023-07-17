import { createContext, useEffect, useState } from "react";

import { getDate } from "../utils/formatterDate";

export const CartContext = createContext();

export function CartContextProvider({ children }) {
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const [productSelected, setProductSelected] = useState({});
    const [cart, setCart] = useState([]);
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const [orders, setOrders] = useState([]);
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({ title: '', category: 'All' });

    const openProductDetail = () =>  setIsProductDetailOpen(true);
    const closeProductDetail = () =>  setIsProductDetailOpen(false);
    const openCheckoutSideMenu = () =>  setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () =>  setIsCheckoutSideMenuOpen(false);
    const setProductToShow = (product) => setProductSelected(product);

    const cartQuantity = cart.reduce((sum, item) => sum += item.quantity, 0);
    const totalPrice = cart.reduce((subTotal, item) => subTotal += item.price * item.quantity, 0);

    const addToCart = (product) => {
        const productCartIndex = cart.findIndex(item => item.id === product.id);
        if (productCartIndex >= 0) {
            const newCart = structuredClone(cart);
            newCart[productCartIndex].quantity += 1;
            return setCart(newCart);
        }
        const newCart = [...cart, product];
        setCart(newCart);
    };

    const removeFromCart = (id) => {
        const newCart = cart.filter(item => item.id !== id);
        setCart(newCart);
    };

    const addToOrders = () => {
        const newOrder = {
            id: crypto.randomUUID(),
            date: getDate(),
            products: cart,
            totalProducts: cartQuantity,
            totalPrice: totalPrice,
        };
        const newOrders = [...orders, newOrder];
        setOrders(newOrders);
        setCart([]);
    };

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch('https://api.escuelajs.co/api/v1/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    const setterFilters = (newFilter) => setFilters(prevState => ({ ...prevState, ...newFilter }));

    const filteredProducts = products.filter(product => 
        product.title.toLocaleLowerCase().includes(filters.title.toLocaleLowerCase()) 
        && (filters.category === 'All' || product.category.name === filters.category));

    return (
        <CartContext.Provider value={{
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            productSelected,
            setProductToShow,
            cart,
            addToCart,
            removeFromCart,
            cartQuantity,
            totalPrice,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            orders,
            addToOrders,
            products: filteredProducts,
            filters,
            setterFilters,
        }}>
            {children}
        </CartContext.Provider>
    );
}
