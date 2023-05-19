import React from 'react';

const Card = ({ obj }) => {
    const {price, toyName, photo,description } = obj
    return (
        <div className="card shadow-xl border border-pink-500">
            <figure><img className='w-[250px] p-5 rounded-lg' src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{toyName}</h2>
                <h2 className="text-md"> Price : ${price}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-pink-600">View details</button>
                </div>
            </div>
        </div>
    );
};

export default Card;