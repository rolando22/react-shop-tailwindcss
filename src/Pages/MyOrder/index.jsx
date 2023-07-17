import { useParams } from 'react-router-dom';

import { OrderCard } from '../../Components';

import { useCartContext } from '../../Hook/useCartContext';

export function MyOrder() {
    const { id } = useParams();
    const { orders } = useCartContext();

    const orderProducts = id ? orders.find(order => order.id === id).products : orders.at(-1)?.products;

    return (
        <>
            <h1 className='font-medium text-xl'>My Order</h1>
            <section className='flex flex-col gap-3 p-6'>
                {orderProducts?.map(item => 
                    <OrderCard 
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        quantity={item.quantity}
                    />
                )}
            </section>
        </>
    );
}
