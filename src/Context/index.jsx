import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartContextProvider({ children }) {
    const [count, setCount] = useState(0);

    const incrementCount = () => setCount(prevState => ++prevState);

    return (
        <CartContext.Provider value={{
            count,
            incrementCount,
        }}>
            {children}
        </CartContext.Provider>
    );
}
