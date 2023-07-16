import { XMarkIcon } from "@heroicons/react/24/solid";

export function OrderCard({ id, title, image, price, quantity, onRemoveFromCart }) {

    return (
        <article className='flex justify-between items-center'>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-normal'>{quantity}</p>
                <figure className='w-20 h-20'>
                    <img 
                        className='w-full h-full rounded-lg object-cover' 
                        src={image} 
                        alt={title} 
                    />
                </figure>
                <p className='text-sm font-light max-w-[130px] overflow-x-hidden'>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>${price * quantity}</p>
                {onRemoveFromCart && 
                    <button 
                        className='cursor-pointer'
                        onClick={onRemoveFromCart(id)}
                    >
                        <XMarkIcon className='h-6 w-6 text-black' />
                    </button>
                }
            </div>
        </article>
    );
}
