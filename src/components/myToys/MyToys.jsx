import React, { useEffect, useState } from 'react';
import MyToysCard from './MyToysCard';



const MyToys = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/toys?email=ibrahimrabbihere@gmail.com`)
            .then(res => res.json())
            .then(res => setData(res))
    }, [])

    const deleteHandler = (id) => {
        fetch(`http://localhost:5000/toys/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(res => {
                if (res.deletedCount > 0) {
                    const riminingData = data.filter(v => v._id !== id)
                    setData(riminingData)
                    alert('delete done')
                }
            })


    }

    return (
        <section className='w-[90%] mx-auto my-14 '>
            <div className='space-y-5'>
                <h1 className='text-4xl text-center'>My Products</h1>
                <hr />
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