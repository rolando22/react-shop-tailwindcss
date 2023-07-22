import { NavLink } from "react-router-dom";

import { useCartContext } from "../../Hook/useCartContext";
import { useUserContext } from "../../Hook/useUserContext";

import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const menu1 = [
    { id: 0, to: '/react-shop-tailwindcss/', text: 'Shopi', class: 'font-semibold text-lg' }, 
    { id: 1, to: '/react-shop-tailwindcss/', text: 'All', class: '' }, 
    { id: 2, to: '/react-shop-tailwindcss/clothes', text: 'Clothes', class: '' }, 
    { id: 3, to: '/react-shop-tailwindcss/shoes', text: 'Shoes', class: '' }, 
    { id: 4, to: '/react-shop-tailwindcss/electronics', text: 'Electronics', class: '' }, 
    { id: 5, to: '/react-shop-tailwindcss/furnitures', text: 'Furniture', class: '' }, 
    { id: 6, to: '/react-shop-tailwindcss/toys', text: 'Toys', class: '' }, 
    { id: 7, to: '/react-shop-tailwindcss/others', text: 'Others', class: '' }, 
];

const menu2 = [
    { id: 0, to: '', text: 'rolando@platzi.com', class: 'text-black/60', session: false }, 
    { id: 1, to: '/react-shop-tailwindcss/my-orders', text: 'My Orders', class: '', session: false }, 
    { id: 2, to: '/react-shop-tailwindcss/my-account', text: 'My Account', class: '', session: false }, 
    { id: 3, to: '/react-shop-tailwindcss/sign-in', text: 'Sign In', class: '', session: true }, 
    { id: 4, to: '/react-shop-tailwindcss/sign-out', text: 'Sign Out', class: '', session: false }, 
]

export function Navbar() {
    const { cartQuantity, setterFilters } = useCartContext();
    const { isSignOut, signOut } = useUserContext();

    const activeStyle = 'underline underline-offset-4';

    const active = ({ isActive }) => isActive ? activeStyle : '';

    const handledOnClickFilterCategory = (category) => () => 
        setterFilters({ category: category === 'Shopi' ? 'All' : category });
    const handledOnClickClear = () => setterFilters({ title: '' });
    const handledOnClickSignOut = () => signOut();

    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white'>
            <ul className='flex items-center gap-3'>
                {menu1.map(item => 
                    <li key={item.id}>
                        <NavLink 
                            to={item.to} className={item.class || active}
                            onClick={handledOnClickFilterCategory(item.text)}
                        >
                            {item.text}
                        </NavLink>
                    </li>
                )}
            </ul>
            <ul className='flex items-center gap-3'>
                {menu2.map(item => 
                    isSignOut === item.session && (
                        item.to !== ''
                            ? <li 
                                key={item.id}
                                onClick={item.text === 'Sign Out' ? handledOnClickSignOut : handledOnClickClear}
                            >
                                <NavLink 
                                    to={item.to} 
                                    className={item.class || active}
                                >
                                    {item.text}
                                </NavLink>
                            </li>
                            : <li 
                                key={item.id} 
                                className={item.class}
                                onClick={handledOnClickClear}
                            >
                                {item.text}
                            </li>
                        )
                )}
                <li className='flex items-center gap-0.5'>
                    <ShoppingCartIcon className='h-5 w-5 text-black'/> 
                    <span>{cartQuantity}</span>
                </li>
            </ul>
        </nav>
    );
}
