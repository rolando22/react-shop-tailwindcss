import { useEffect, useState } from 'react';

import { Card, ProductDetail } from './../../Components';

import { useCartContext } from '../../Hook/useCartContext';

export function Home() {
    const [products, setProducts] = useState([]);
    const { isProductDetailOpen, openProductDetail } = useCartContext();

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
            <section className='grid lg:grid-cols-4 sm:grid-cols-2 justify-items-center gap-4 w-full max-w-screen-lg'>
                {products.map(product => 
                    <Card 
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        image={product.images[0]}
                        categoryName={product.category.name}
                        description= {product.description}
                        openProductDetail={openProductDetail}
                    />
                )}
            </section>
            {isProductDetailOpen && <ProductDetail />}
        </>
    );
}
