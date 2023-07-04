import { useEffect, useState } from 'react';

import { Card, ProductDetail } from './../../Components';

export function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch('https://api.escuelajs.co/api/v1/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return (
        <>
            <section className='grid grid-cols-4 gap-4 w-full max-w-screen-lg'>
                {products.map(product => 
                    <Card 
                        key={product.id}
                        title={product.title}
                        price={product.price}
                        image={product.images[0]}
                        categoryName={product.category.name}
                    />
                )}
            </section>
            <ProductDetail />
        </>
    );
}
