import { Link } from "react-router-dom";

import { useUserContext } from "../../Hook/useUserContext";

export function Signin() {
    const { account } = useUserContext();

    const hasUserAnAccount = Object.keys(account).length !== 0;

    return (
        <>
            <h1 className='font-medium text-xl'>Welcome</h1>
            <section className='flex flex-col gap-20 w-80'>
                <div>
                    <p>
                        <span className='font-light text-sm'>Email: </span>
                        <span>{account?.email}</span>
                    </p>
                    <p>
                        <span className="font-light text-sm">Password: </span>
                        <span>{account?.password}</span>
                    </p>
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <Link to='/react-shop-tailwindcss/'>
                        <button 
                            className='bg-black disabled:bg-black/40 text-white w-full rounded-lg py-3 mb-2'
                            disabled={!hasUserAnAccount}
                        >
                            Log in
                        </button>
                    </Link>
                    <div className='text-center'>
                        <a className='font-light text-xs underline underline-offset-4' href='/'>Forgot my Password</a>
                    </div>
                    <Link to='/react-shop-tailwindcss/create-account'>
                        <button 
                            className='border border-black disabled:text-black/40 disabled:border-black/40 rounded-lg py-3 w-full'
                            disabled={hasUserAnAccount}
                        >
                            Sign up
                        </button>
                    </Link>
                </div>
            </section>
        </>
    );
}
