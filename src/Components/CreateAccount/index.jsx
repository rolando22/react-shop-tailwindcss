import { useRef } from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../../Hook/useUserContext";

export function CreateAccount() {
    const formCreateAccount = useRef(null);
    const { signIn } = useUserContext();

    const handleOnClickCreateAccount = () => {
        const formDataCreateAccount = new FormData(formCreateAccount.current);
        const data = Object.fromEntries(formDataCreateAccount);
        signIn(data);
    };

    return (
        <>
            <h1 className='font-medium text-xl'>Welcome</h1>
            <form className='flex flex-col gap-4 w-80' ref={formCreateAccount}>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='name' className='font-light text-sm'>Your name:</label>
                    <input 
                        className='rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4' 
                        type='text' 
                        id='name' 
                        name='name' 
                        placeholder='Peter' 
                    />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='email' className='font-light text-sm'>Your email:</label>
                    <input 
                        className='rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4' 
                        type='text' 
                        id='email' 
                        name='email' 
                        placeholder='peter@platzi.com' 
                    />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='password' className='font-light text-sm'>Your password:</label>
                    <input 
                        className='rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4' 
                        type='text' 
                        id='password' 
                        name='password' 
                    />
                </div>
                <Link to='/react-shop-tailwindcss/'>
                    <button 
                        className='bg-black text-white w-full rounded-lg py-3'
                        onClick={handleOnClickCreateAccount}
                    >
                        Create
                    </button>
                </Link>
            </form>
        </>
    );
}
