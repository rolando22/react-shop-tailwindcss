import { Navigate, useRoutes } from "react-router-dom";

import { 
    Home, 
    MyAccount, 
    MyOrder, 
    MyOrders, 
    NotFound, 
    Signin 
} from './../Pages';

import { CreateAccount } from './../Components';
import { useUserContext } from "../Hook/useUserContext";

export const AppRoutes = () => {
    const { account, isSignOut } = useUserContext();

    const hasUserAnAccount = Object.keys(account).length !== 0;

    const routes = useRoutes([
        { path: '/', element: hasUserAnAccount && !isSignOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
        { path: '/:category', element: hasUserAnAccount && !isSignOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
        { path: '/my-account', element: hasUserAnAccount && !isSignOut ? <MyAccount /> : <Navigate replace to={'/sign-in'} /> },
        { path: '/my-order', element: hasUserAnAccount && !isSignOut ? <MyOrder /> : <Navigate replace to={'/sign-in'} /> },
        { path: '/my-order/last', element: hasUserAnAccount && !isSignOut ? <MyOrder /> : <Navigate replace to={'/sign-in'} /> },
        { path: '/my-order/:id', element: hasUserAnAccount && !isSignOut ? <MyOrder /> : <Navigate replace to={'/sign-in'} /> },
        { path: '/my-orders', element: hasUserAnAccount && !isSignOut ? <MyOrders /> : <Navigate replace to={'/sign-in'} /> },
        { path: '/sign-in', element: <Signin /> },
        { path: '/create-account', element: <CreateAccount /> },
        { path: '/*', element: <NotFound /> },
    ]);

    return routes;
};
