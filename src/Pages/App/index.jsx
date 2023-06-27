import { 
    Home, 
    MyAccount, 
    MyOrder, 
    MyOrders, 
    NotFound, 
    Signin 
} from './../';

import './App.css';

export function App() {
    return (
        <>
            <div className='bg-green-800'>Hola Mundo</div>
            <Home />
            <MyAccount />
            <MyOrder />
            <MyOrders />
            <NotFound />
            <Signin />
        </>
    );
}
