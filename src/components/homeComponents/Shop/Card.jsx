import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Context } from '../../Authentication/AuthContext';

const Card = ({ obj }) => {
    
    const { _id, price, toyName, photo, description, rating } = obj
    const {user} = useContext(Context)
    const navigate = useNavigate()


    const handler = (id) => {
     
        if (user) {
            navigate(`/alltoys/${_id}`)
        } else {
            Swal.fire({
                title: 'you have to sign in first',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'sign in'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate(`/alltoys/${_id}`)
                     
                }
            })
       }

    }



    
    return (
         
            <div className={`flex gap-8 border p-5 rounded-lg shadow-md`}>
                <div className="avatar">
                    <div className="w-32 rounded-xl">
                        <img src={photo} />
                    </div>
                </div>
                <div className=" ">
                    <h2 className="text-2xl font-semibold">{toyName}</h2>
                    <p className=' text-gray-500'>{description}</p>
                    <div className='flex justify-between items-center mt-5'>
                    <div>
                    <p>price -<span className='text-yellow-400 font-semibold text-xl'>${price}</span></p>
                    <Rating style={{ maxWidth: 120 }} value={rating} readOnly />
                    </div>
                        <button className='btn' onClick={() => handler(_id)}>View Details</button>
                    </div>
                </div>
            </div>
             
         
    );
};

export default Card;