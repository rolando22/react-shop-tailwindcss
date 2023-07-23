import { ShoppingCartIcon } from "@heroicons/react/24/solid";

import { useCartContext } from "../../Hook/useCartContext";

export function ShoppingCart() {
    const { cartQuantity } = useCartContext();

    return (
        <div className='flex items-center gap-0.5 relative'>
            <ShoppingCartIcon className='h-5 w-5 fill-none stroke-black cursor-pointer'/> 
            <span className='flex absolute bottom-3.5 left-4 justify-center items-center rounded-lg bg-black w-4 h-4 text-xs text-white'>
                {cartQuantity}
            </span>
        </div>
    );
}
