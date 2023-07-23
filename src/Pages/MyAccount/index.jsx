import { Link } from "react-router-dom";

import { useUserContext } from "../../Hook/useUserContext";

export function MyAccount() {
    const { account } = useUserContext();

    return (
        <>
            <h1 className='font-medium text-xl'>My Account</h1>
            <section className='flex flex-col gap-10 w-80'>
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
                <Link to='/edit-account'>
                    <button className='border border-black rounded-lg py-3 w-full'>
                        Edit
                    </button>
                </Link>
            </section>
        </>
    );
}
