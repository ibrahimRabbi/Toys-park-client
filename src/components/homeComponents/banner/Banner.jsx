import React from 'react';
import  './header.css'

const Banner = () => {
    return (
        <header className='relative lg:h-[100vh] h-[60vh]'>
            <div data-aos="zoom-in" className='lg:w-[40%] w-[90%] mx-auto text-center lg:text-start absolute lg:top-36 top-28 lg:right-16 right-5'>
                <h4 className='text-2xl font-bold text-black'>welcome to toys park !</h4>
                <h1 className='lg:text-6xl text-4xl font-bold text-pink-600 mt-1'> lets Enjoy and Explore toys park world</h1>
                <p className='font-semibold mt-3 text-black'>premium toy for the genuine start .the best place to your buy dreams toys .we provide toys for all age kids</p>
                <button className='bg-pink-600 font-semibold px-7 py-3 text-xl rounded-xl text-slate-50 mt-7'>view more</button>
            </div>
         </header>
    );
};

export default Banner;