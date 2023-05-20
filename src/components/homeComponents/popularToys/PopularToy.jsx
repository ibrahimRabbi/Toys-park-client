import React,{useEffect,useState} from 'react';
import PopularCard from './PopularCard';

const PopularToy = () => {

    const  [data,setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/popular')
            .then(res => res.json())
            .then(res => setData(res))
    }, [])
    

    return (
        <section className='my-28 w-[90%] mx-auto'>
            <div className='mb-14 w-1/2 mx-auto space-y-4 text-center'>
                <h1 className='text-4xl  font-semibold'>Popular toys</h1>
                <p className='text-sm text-gray-400'>Discover the Magic Unicorn Castle: Step into a world of enchantment with the Magic Unicorn Castle toy set. This whimsical playset includes a majestic castle, complete</p>
                <hr className='border-pink-500' />
            </div>
            <div className='grid grid-cols-3 gap-10'>
                {
                    data.map(v => <PopularCard key={v._id} obj={v} />)
                }
            </div>
        </section>
    );
};

export default PopularToy;