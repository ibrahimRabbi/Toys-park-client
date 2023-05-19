import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ShowDetials = () => {
    const { _id, name, toyName, price, stock, category, photo, rating, description } = useLoaderData()
    return (
        <section className='my-20 w-[90%] mx-auto relative'>
            <div className=' w-1/2 mx-auto space-y-4 font-semibold'>
                <h1 className='text-4xl text-center '>details {toyName}</h1>
                <hr className='border-pink-500' />
            </div>
            <div className="card mt-11 p-5  lg:card-side bg-base-100 shadow-2xl">
                <figure><img className='w-[400px]' src={photo} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl">{toyName}</h2>
                    <div>
                        <p>{description}</p>
                   </div>
                    <div className='text-lg font-semibold'>
                        <p>price : ${price}</p>
                        <p>available stock : {stock}</p>
                        <p>Category : {category}</p>
                        <p>Seller Name : {name}</p>
                    </div>
                    <div className="card-actions  flex justify-between mt-10 items-center ">
                        <Rating style={{ maxWidth: 200 }} value={rating} readOnly/>
                       <Link to='/alltoys' className='btn bg-pink-500'>Back</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShowDetials;