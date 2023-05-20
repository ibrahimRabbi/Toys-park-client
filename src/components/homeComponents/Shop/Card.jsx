import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Context } from '../../Authentication/AuthContext';

const Card = ({ obj, }) => {
    
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
        <div className="card shadow-xl border border-pink-500">
            <figure><img className='w-[250px] p-5 rounded-lg' src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{toyName}</h2>
                <h2 className="text-md"> Price : ${price}</h2>
                <p>{description}</p>
                <div className="card-actions justify-between items-center">
                    <Rating style={{ maxWidth: 120 }} value={rating} readOnly />
                    {/* <Link to={} className="btn bg-pink-600">View details</Link> */}
                    <button className='btn' onClick={()=>handler(_id)}>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Card;