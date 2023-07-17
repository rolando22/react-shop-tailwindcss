import { Card, ProductDetail } from './../../Components';

import { useCartContext } from '../../Hook/useCartContext';

export function Home() {
    const { 
        isProductDetailOpen, 
        openProductDetail, 
        products, 
        filters,
        setterFilters, 
    } = useCartContext();

    const handlerOnChangeFilterTitle = (event) => setterFilters({ title: event.target.value });

    return (
        <>
            <h1 className='font-medium text-xl'>Shopi</h1>
            <input 
                className='rounded-lg border border-black w-80 p-3 focus:border-gray-700'
                type='text' 
                placeholder='Search a product'
                value={filters.title}
                onChange={handlerOnChangeFilterTitle}
            />
            {products.length === 0 && <p className='text-center'>Sorry, not found products...</p>}
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
