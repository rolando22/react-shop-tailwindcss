import { useCartContext } from '../../Hook/useCartContext';

import { XMarkIcon } from '@heroicons/react/24/solid';

export function ProductDetail() {
    const { 
            closeProductDetail, 
            productSelected: { title, price, image, description } 
    } = useCartContext();

    const handleOnClickCloseDetail = () => closeProductDetail();

    return (
        <aside className='flex flex-col fixed w-[360px] h-[calc(100vh-68px)] top-[68px] right-0 border border-black rounded-lg bg-white'>
            <section className='flex justify-between items-center p-8'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <button 
                    className='cursor-pointer'
                    onClick={handleOnClickCloseDetail}
                >
                    <XMarkIcon className='h-6 w-6 text-black' />
                </button>
            </section>
            <figure className='w-[360px] h-[360px] p-8'>
                <img
                    className='w-full h-full rounded-lg' 
                    src={image} 
                    alt={title} 
                />
            </figure>
            <p className='flex flex-col p-8 gap-1'>
                <span className='font-medium text-2xl'>${price}</span>
                <span className='font-medium text-md'>{title}</span>
                <span className='font-light text-sm'>{description}</span>
            </p>
        </aside>
    );
}
