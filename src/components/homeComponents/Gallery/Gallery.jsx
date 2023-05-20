import React from 'react';
import './gallary.css'
const Gallery = () => {
    return (
        <section className='mt-16 w-[85%] mx-auto'>
            <div className='mb-10 w-1/2 space-y-4 text-start'>
                <h1 className='text-4xl text-pink-700 font-semibold'>Features</h1>
                <p className='text-sm text-gray-400'>Discover the Magic Unicorn Castle: Step into a world of enchantment with the Magic Unicorn Castle toy set. This whimsical playset includes a majestic castle, complete</p>
                <hr className='border-pink-500' />
            </div>
            <div className='gallery mt-11 gap-3'>
                <img className='w-full pp' src="https://i.ibb.co/60PHgDX/batman.jpg" alt="" />
                <div className='flex flex-wrap gap-8 w-full'>
                    <img className='w-[260px] pp' src="https://i.ibb.co/W2bknhD/thanos2.jpg" alt="" />
                    <img className='w-[260px] pp' src="https://i.ibb.co/NYB7PcT/hulk.jpg" alt="hulk" />
                    <img className='w-[260px] pp' src="https://i.ibb.co/J7ydPRK/thanos.jpg" alt="thanos" />
                    <img className='w-[260px] pp' src="https://i.ibb.co/Q6F09hP/download-17.jpg" alt="download-17" />

                </div>
                <img className='w-full pp' src="https://i.ibb.co/0hwGLdT/download-19.jpg" />
            </div>
       </section>
    );
};

export default Gallery;