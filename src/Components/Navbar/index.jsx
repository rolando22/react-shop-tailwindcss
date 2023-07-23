import { NavLink } from "react-router-dom";

import { useCartContext } from "../../Hook/useCartContext";
import { useUserContext } from "../../Hook/useUserContext";

import { ShoppingCart } from "../ShoppingCart";

const menu1 = [
    { id: 0, to: '/', text: 'Shopi', class: 'font-semibold text-lg' }, 
    { id: 1, to: '/', text: 'All', class: '' }, 
    { id: 2, to: '/clothes', text: 'Clothes', class: '' }, 
    { id: 3, to: '/shoes', text: 'Shoes', class: '' }, 
    { id: 4, to: '/electronics', text: 'Electronics', class: '' }, 
    { id: 5, to: '/furnitures', text: 'Furniture', class: '' }, 
    { id: 6, to: '/toys', text: 'Toys', class: '' }, 
    { id: 7, to: '/others', text: 'Others', class: '' }, 
];

const menu2 = [
    { id: 0, to: '', text: 'email', class: 'text-black/60', session: true }, 
    { id: 1, to: '/my-orders', text: 'My Orders', class: '', session: true }, 
    { id: 2, to: '/my-account', text: 'My Account', class: '', session: true }, 
    { id: 3, to: '/sign-in', text: 'Sign In', class: '', session: false }, 
    { id: 4, to: '/sign-out', text: 'Sign Out', class: '', session: true }, 
]

export function Navbar() {
    const { setterFilters } = useCartContext();
    const { account, isSignOut, signOut } = useUserContext();

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
                    !isSignOut === item.session && (
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
                                {item.text === 'email' ? account?.email : item.text}
                            </li>
                        )
                )}
                <li className='flex items-center'>
                    <ShoppingCart />
                </li>
            </ul>
        </nav>
    );
}
