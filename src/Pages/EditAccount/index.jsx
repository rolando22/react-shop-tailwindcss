import { useRef } from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../../Hook/useUserContext";

export function EditAccount() {
    const formEditAccount = useRef(null);
    const { account, saveAccount } = useUserContext();

    const handleOnClickEditAccount = () => {
        const formDataEditAccount = new FormData(formEditAccount.current);
        const data = Object.fromEntries(formDataEditAccount);
        saveAccount(data);
    };

    return (
        <>
            <h1 className='font-medium text-xl'>Edit Account</h1>
            <form className='flex flex-col gap-4 w-80' ref={formEditAccount}>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='name' className='font-light text-sm'>Your name:</label>
                    <input 
                        className='rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4' 
                        type='text' 
                        id='name' 
                        name='name' 
                        defaultValue={account?.name}
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
                        defaultValue={account?.email}
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
                        defaultValue={account?.password}
                    />
                </div>
                <Link to='/react-shop-tailwindcss/'>
                    <button 
                        className='bg-black text-white w-full rounded-lg py-3'
                        onClick={handleOnClickEditAccount}
                    >
                        Save
                    </button>
                </Link>
            </form>
        </>
    );
}
