import { OrdersCard } from './../../Components';

import { useCartContext } from '../../Hook/useCartContext';

export function MyOrders() {
    const { orders } = useCartContext();

    return (
        <>
            <h1 className='font-medium text-xl'>My Orders</h1>
            <section className='flex flex-col gap-2'>
                {orders.map(order => 
                    <OrdersCard 
                        key={order.id}
                        id={order.id}
                        date={order.date}
                        totalProducts={order.totalProducts}
                        totalPrice={order.totalPrice}
                    />
                )}
            </section>
        </>
    );
}
