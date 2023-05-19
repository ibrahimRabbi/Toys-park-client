import React from 'react';
import { FaTrash,FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const MyToysCard = ({ obj,handler }) => {
    const {_id, price, toyName, photo, stock, category } = obj

   

    return (
        <div className='flex items-center justify-between border rounded-lg mx-auto border-pink-600 mt-7 w-[70%] p-3'>
            <div className='flex items-center gap-10'>
                <img className='rounded-lg w-[100px]'   src={photo} alt="" />
                <div className='font-semibold'>
                    <p className='text-2xl'>Name :{toyName}</p>
                    <p className='text-lg'> price : ${price}</p>
                    <p> stock : {stock}</p>
                    <p>  category : {category}</p>
                </div>
            </div>

            <div className='flex flex-col gap-5'>
                <Link to={`/mytoys/${_id}`} className=' btn gap-2'>
                    Edit
                    <FaEdit/>
                </Link>
                <button onClick={()=> handler(_id)} className='btn gap-2  bg-red-600'>
                    Delete
                    <FaTrash/>
               </button>
            </div>
        </div>
    );
};

export default MyToysCard;