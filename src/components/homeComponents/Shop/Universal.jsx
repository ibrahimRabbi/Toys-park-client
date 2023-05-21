import React, { useEffect, useState } from 'react';
import Card from './Card';
const Universal = () => {
    
         const [universal, setUniversal] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:5000/category/universal')
            .then(res => res.json())
            .then(res => setUniversal(res))
    }, [])

    return (
        <section>
            <div data-aos="fade-right" className='mb-10 mt-5 lg:w-1/2 space-y-4 text-start text-pink-600'>
                <h1 className='text-2xl  font-semibold'>Universal</h1>
                <p className='text-sm text-gray-400'>Discover the Magic Unicorn Castle: Step into a world of enchantment with the Magic Unicorn Castle toy set. This whimsical playset includes a majestic castle, complete</p>
                <hr className='border-pink-500' />
            </div>

            <div data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                className='grid grid-cols-1 lg:grid-cols-3 gap-10 my-14'>
                {
                    universal.map(v => <Card obj={v} key={v._id} />)
                }
            </div>
        </section>
       
    );
    
};

export default Universal;