import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
const Error = () => {
    const error = useRouteError()
    return (
        <section className='flex justify-center items-center mt-40'>
            <div className='text-center'>
                <img src="https://www.shutterstock.com/image-vector/404-not-found-error-icon-260nw-1889718397.jpg" alt="" srcset="" />
                <Link className='bg-purple-500 p-3 text-slate-50 rounded-md px-12 relative -top-5' to='/'>Go Home</Link>
            </div>
        </section>
    );
};

export default Error;