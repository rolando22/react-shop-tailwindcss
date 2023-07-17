import { Link } from "react-router-dom";

import { CalendarDaysIcon, ChevronRightIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";

export function OrdersCard({ id, date, totalProducts, totalPrice }) {

    return (
        <article className='flex justify-between items-center border border-black w-80 rounded-lg p-4'>
            <p className='flex flex-col'>
                <span className='flex items-center gap-2'>
                    <CalendarDaysIcon className='h-5 w-5 text-black'/>{date}
                </span>
                <span className='flex items-center gap-2'>
                    <ShoppingCartIcon className='h-5 w-5 text-black'/>{totalProducts} articles
                </span>
            </p>
            <p className='flex items-center gap-2'>
                <span>${totalPrice}</span>
                <Link to={`/my-order/${id}`}>
                    <ChevronRightIcon className='h-6 w-6 text-black' />
                </Link>
            </p>
        </article>
    );
}
