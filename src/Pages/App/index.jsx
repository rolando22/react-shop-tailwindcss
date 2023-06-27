import { BrowserRouter, useRoutes } from 'react-router-dom'

import { 
    Home, 
    MyAccount, 
    MyOrder, 
    MyOrders, 
    NotFound, 
    Signin 
} from './../';

import { Layout, Navbar } from './../../Components'

import './App.css';

const AppRoutes = () => {
    const routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/my-account', element: <MyAccount /> },
        { path: '/my-order', element: <MyOrder /> },
        { path: '/my-orders', element: <MyOrders /> },
        { path: '/signin', element: <Signin /> },
        { path: '/*', element: <NotFound /> },
    ]);

    return routes;
};

export function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Layout>
                <AppRoutes />
            </Layout>
        </BrowserRouter>
    );
}
