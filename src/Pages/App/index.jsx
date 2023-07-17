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
        { path: '/', element: <Home /> },
        { path: '/:category', element: <Home /> },
        { path: '/my-account', element: <MyAccount /> },
        { path: '/my-order', element: <MyOrder /> },
        { path: '/my-order/last', element: <MyOrder /> },
        { path: '/my-order/:id', element: <MyOrder /> },
        { path: '/my-orders', element: <MyOrders /> },
        { path: '/signin', element: <Signin /> },
        { path: '/*', element: <NotFound /> },
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
