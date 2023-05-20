import { Rating } from '@smastrom/react-rating';
import React from 'react';

const PopularCard = ({ obj }) => {
    const {name,price,img,category,description} = obj
    
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>If a dog chews shoes whose shoes does he</p>
                <div className='flex flex-col -ml-56 mb-16'>
                    <p className='text-xl'>price<span className='text-gray-500'>${price}</span></p>
                    <Rating style={{ maxWidth: 100 }} value={5} readOnly />
               </div>
                <div className="card-actions">
                    <button className="btn btn-primary">view details</button>
                </div>
            </div>
        </div>
    );
};

export default PopularCard;