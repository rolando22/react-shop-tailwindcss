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

    const signIn = (account) => {
        localStorage.setItem('account', JSON.stringify(account));
        setAccount(account);
        localStorage.setItem('sign-out', JSON.stringify(false));
        setIsSignOut(false);
    };

    return (
        <UserContext.Provider value={{
            account,
            isSignOut,
            signOut,
            signIn,
        }}>
            {children}
        </UserContext.Provider>
    );
}
