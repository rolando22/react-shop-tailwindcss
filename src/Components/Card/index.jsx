import { useCartContext } from "../../Hook/useCartContext";

import { PlusSmallIcon } from "@heroicons/react/24/solid";

export function Card({ id, title, price, image, categoryName, description, openProductDetail }) {
    const { 
            setProductToShow, 
            closeProductDetail, 
            addToCart, 
            openCheckoutSideMenu, 
            closeCheckoutSideMenu 
    } = useCartContext();
    
    const handleOnClickAddToCart = () => { 
        addToCart({ id, title, price, image, categoryName, description, quantity: 1 });
        closeProductDetail();
        openCheckoutSideMenu();
    };
    const handleOneClickOpenDetail = () => {
        setProductToShow({ title, price, image, description });
        closeCheckoutSideMenu();
        openProductDetail();
    }

    return (
        <article className='bg-white w-56 h-60 rounded-lg'>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
                    {categoryName}
                </span>
                <img 
                    className='w-full h-full object-cover rounded-lg cursor-pointer'
                    src={image} 
                    alt={title} 
                    onClick={handleOneClickOpenDetail}
                />
                <button 
                    className='absolute top-0 right-0 grid place-content-center bg-white w-6 h-6 rounded-lg m-2 p-1'
                    onClick={handleOnClickAddToCart}
                >
                    <PlusSmallIcon className='h-4 w-4 text-black' />
                </button>
            </figure>
            <p className='flex justify-between items-center'>
                <span className='text-sm font-light'>{title}</span>
                <span className='text-lg font-medium'>${price}</span>
            </p>
        </article>
    );
}
