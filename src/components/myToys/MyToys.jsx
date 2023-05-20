import React, { useContext, useEffect, useState } from 'react';
import MyToysCard from './MyToysCard';
import Swal from 'sweetalert2';
import { Context } from '../Authentication/AuthContext';


const MyToys = () => {

    const [data, setData] = useState([])
    const { user } = useContext(Context)
    console.log(user)

    useEffect(() => {
        fetch(`http://localhost:5000/toys?email=${user.email}`)
            .then(res => res.json())
            .then(res => setData(res))
    }, [])

    const ascending = () => {
        fetch(`http://localhost:5000/toys?email=${user.email}&sort=1`)
            .then(res => res.json())
            .then(res => setData(res))
    }
    const descending = () => {
        fetch(`http://localhost:5000/toys?email=${user.email}&sort=-1`)
            .then(res => res.json())
            .then(res => setData(res))
    }

    const deleteHandler = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/toys/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(res => {
                        if (res.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'delete successfully',
                                'success'
                            )
                            const riminingData = data.filter(v => v._id !== id)
                            setData(riminingData)
                             
                        }
                    })
                
            }
        })


    }

    return (
        <section className='w-[90%] mx-auto my-14 '>
            <div className='space-y-5'>
                <h1 className='text-4xl text-center'>My Products</h1>
                <hr />
            </div>
            <div className='flex justify-end gap-3 my-10'>
                <button onClick={ascending} className='btn bg-pink-600'>sort ascending</button>
                <button onClick={descending} className='btn bg-pink-600'>sort descending</button>
            </div>
            <div>
                {
                    data.map(v => <MyToysCard key={v._id} obj={v} handler={deleteHandler} />)
                }
            </div>
            
        </section >
    );
};

export default MyToys;