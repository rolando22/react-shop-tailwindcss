import { BrowserRouter, useRoutes } from 'react-router-dom';

import { 
    Home, 
    MyAccount, 
    MyOrder, 
    MyOrders, 
    NotFound, 
    Signin 
} from './../';

import { CheckoutSideMenu, Layout, Navbar } from './../../Components';

import { useCartContext } from '../../Hook/useCartContext';

import './App.css';

const AppRoutes = () => {
    const routes = useRoutes([
        { path: '/react-shop-tailwindcss/', element: <Home /> },
        { path: '/react-shop-tailwindcss/:category', element: <Home /> },
        { path: '/react-shop-tailwindcss/my-account', element: <MyAccount /> },
        { path: '/react-shop-tailwindcss/my-order', element: <MyOrder /> },
        { path: '/react-shop-tailwindcss/my-order/last', element: <MyOrder /> },
        { path: '/react-shop-tailwindcss/my-order/:id', element: <MyOrder /> },
        { path: '/react-shop-tailwindcss/my-orders', element: <MyOrders /> },
        { path: '/react-shop-tailwindcss/sign-in', element: <Signin /> },
        { path: '/react-shop-tailwindcss/*', element: <NotFound /> },
    ]);

    return routes;
};

export function App() {
    const { isCheckoutSideMenuOpen } = useCartContext();

    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Layout>
                    <AppRoutes />
                </Layout>
                {isCheckoutSideMenuOpen && <CheckoutSideMenu />}
            </BrowserRouter>
        </>
    );
}
