import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
const Error = () => {
    const error = useRouteError()
    return (
        <section className='flex justify-center'>
            <div className='text-center'>
                <img className='w-[100%] h-[100vh]' src="../../../public/404Img.jpg" alt="" />
                <Link className='bg-pink-500 p-3 text-slate-50 rounded-md px-12 relative -top-16' to='/'>Go Home</Link>
            </div>
        </section>
    );
};

export default Error;