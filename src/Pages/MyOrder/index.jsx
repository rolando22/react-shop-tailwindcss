import { OrderCard } from '../../Components';

import { useCartContext } from '../../Hook/useCartContext';

export function MyOrder() {
    const { orders } = useCartContext();

    return (
        <>
            <div>MyOrder</div>
            <section className='flex flex-col gap-3 p-6'>
                {orders.at(-1)?.products?.map(item => 
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
