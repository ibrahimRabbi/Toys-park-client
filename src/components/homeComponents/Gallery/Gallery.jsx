import React from 'react';
import './gallary.css'
const Gallery = () => {
    return (
        <section className='gallery w-[90%] mx-auto p-5 mt-20'>
            <img className='w-full pp' src="https://i.ibb.co/60PHgDX/batman.jpg" alt="" />
            <div className='flex flex-wrap gap-8 w-full ml-4'>
                <img className='w-[260px] pp' src="https://i.ibb.co/W2bknhD/thanos2.jpg" alt="" />
                <img className='w-[260px] pp' src="https://i.ibb.co/NYB7PcT/hulk.jpg" alt="hulk" />
                <img className='w-[260px] pp' src="https://i.ibb.co/J7ydPRK/thanos.jpg" alt="thanos"/>
                <img className='w-[260px] pp' src="https://i.ibb.co/Q6F09hP/download-17.jpg" alt="download-17"/> 
                               
            </div>
            <img className='w-full pp' src="https://i.ibb.co/0hwGLdT/download-19.jpg"/>
         </section>
    );
};

export default Gallery;