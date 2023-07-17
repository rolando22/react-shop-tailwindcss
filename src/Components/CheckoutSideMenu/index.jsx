import { Link } from 'react-router-dom';

import { OrderCard } from '../';

import { useCartContext } from '../../Hook/useCartContext';

import { XMarkIcon } from '@heroicons/react/24/solid';

export function CheckoutSideMenu() {
    const { 
        cart, 
        totalPrice, 
        closeCheckoutSideMenu, 
        addToOrders, 
        removeFromCart,
        setterFilters,
    } = useCartContext();

    const handleOnClickCloseSideMenu = () => closeCheckoutSideMenu();
    const handlerOnClickAddToOrders = () => { 
        addToOrders();
        closeCheckoutSideMenu();
        setterFilters({ title: '' })
    };
    const handlerOnClickRemoveFromCart = (id) => () => removeFromCart(id);

    return (
        <aside className='flex flex-col fixed w-[360px] h-[calc(100vh-68px)] top-[68px] right-0 border border-black rounded-lg bg-white'>
            <section className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <button 
                    className='cursor-pointer'
                    onClick={handleOnClickCloseSideMenu}
                >
                    <XMarkIcon className='h-6 w-6 text-black' />
                </button>
            </section>
            <section className='flex flex-col gap-3 p-6 overflow-y-scroll flex-1'>
                {cart.map(item => 
                    <OrderCard 
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        quantity={item.quantity}
                        onRemoveFromCart={handlerOnClickRemoveFromCart}
                    />
                )}
            </section>
            <section className='flex flex-col gap-3 p-6'>
                <p className='flex justify-between items-center'>
                    <span className='font-light'>Total:</span>
                    <span className='text-lg font-bold'>${totalPrice}</span>
                </p>
                <Link to='/my-order/last'>
                    <button 
                        className='w-full bg-green-500 py-3 rounded-lg'
                        onClick={handlerOnClickAddToOrders}
                    >
                        Checkout
                    </button>
                </Link>
            </section>
        </aside>
    );
}