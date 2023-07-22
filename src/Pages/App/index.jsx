import { BrowserRouter } from 'react-router-dom';

import { CheckoutSideMenu, Layout, Navbar } from './../../Components';
import { AppRoutes } from '../../Routes/AppRoutes';
import { useCartContext } from '../../Hook/useCartContext';

import './App.css';

export function App() {
    const { isCheckoutSideMenuOpen } = useCartContext();

    return (
        <>
            <BrowserRouter basename='/react-shop-tailwindcss'>
                <Navbar />
                <Layout>
                    <AppRoutes />
                </Layout>
                {isCheckoutSideMenuOpen && <CheckoutSideMenu />}
            </BrowserRouter>
        </>
    );
}
