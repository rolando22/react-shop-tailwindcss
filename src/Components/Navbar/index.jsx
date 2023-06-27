import { NavLink } from "react-router-dom";

const menu1 = [
    { id: 0, to: '/', text: 'Shopi', class: 'font-semibold text-lg' }, 
    { id: 1, to: '/', text: 'All', class: '' }, 
    { id: 2, to: '/clothes', text: 'Clothes', class: '' }, 
    { id: 3, to: '/electronics', text: 'Electronics', class: '' }, 
    { id: 4, to: '/furnitures', text: 'Furnitures', class: '' }, 
    { id: 5, to: '/toys', text: 'Toys', class: '' }, 
    { id: 6, to: '/others', text: 'Others', class: '' }, 
];

const menu2 = [
    { id: 0, to: '', text: 'rolando@platzi.com', class: 'text-black/60' }, 
    { id: 1, to: '/my-orders', text: 'My Orders', class: '' }, 
    { id: 2, to: '/my-account', text: 'My Account', class: '' }, 
    { id: 3, to: '/signin', text: 'Sign In', class: '' }, 
    { id: 4, to: '', text: '🛒 0', class: '' }, 
]

export function Navbar() {
    const activeStyle = 'underline underline-offset-4';

    const active = ({ isActive }) => isActive ? activeStyle : '';

    return (
        <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-3'>
                {menu1.map(item => 
                    <li key={item.id}>
                        <NavLink to={item.to} className={item.class || active}>{item.text}</NavLink>
                    </li>
                )}
            </ul>
            <ul className='flex items-center gap-3'>
                {menu2.map(item => 
                    item.to !== ''
                        ? <li key={item.id}><NavLink to={item.to} className={item.class || active}>{item.text}</NavLink></li>
                        : <li key={item.id} className={item.class}>{item.text}</li>
                )}
            </ul>
        </nav>
    );
}
