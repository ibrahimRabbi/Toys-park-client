import React, { useEffect,useState } from 'react';
import Card from './Card';
const WarnerBros = () => {
    const [warner, setWarner] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/category/warner bros')
            .then(res => res.json())
            .then(res => setWarner(res))
    }, [])
    return (
        <section>
            <div className='mb-10 mt-5 w-1/2 space-y-4 text-start text-pink-600'>
                <h1 className='text-2xl  font-semibold'>Warner Bros</h1>
                <p className='text-sm text-gray-400'>Discover the Magic Unicorn Castle: Step into a world of enchantment with the Magic Unicorn Castle toy set. This whimsical playset includes a majestic castle, complete</p>
                <hr className='border-pink-500' />
            </div>
            
            <div className='grid grid-cols-3 gap-10 my-14'>
                {
                    warner.map(v => <Card obj={v} key={v._id} />)
                }
            </div>
        </section>
        
    );
};

export default WarnerBros;