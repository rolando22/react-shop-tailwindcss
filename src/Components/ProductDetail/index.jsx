import { XMarkIcon } from '@heroicons/react/24/solid';

export function ProductDetail() {
    return (
        <aside className='flex flex-col fixed w-[360px] h-[calc(100vh-68px)] top-[68px] right-0 border border-black rounded-lg bg-white'>
            <section className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <button><XMarkIcon className='h-6 w-6 text-black' /></button>
            </section>
        </aside>
    );
}
