import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
    const [account, setAccount] = useState(() => {
        const accountLocalStorage = localStorage.getItem('account');
        return accountLocalStorage ? JSON.parse(accountLocalStorage) : {};
    });
    const [isSignOut, setIsSignOut] = useState(() => {
        const signOutLocalStorage = localStorage.getItem('sign-out');
        return signOutLocalStorage ? JSON.parse(signOutLocalStorage) : false;
    });

    const signOut = () => {
        localStorage.setItem('sign-out', JSON.stringify(true));
        setIsSignOut(true);
    };

    return (
        <UserContext.Provider value={{
            account,
            isSignOut,
            signOut,
        }}>
            {children}
        </UserContext.Provider>
    );
}
