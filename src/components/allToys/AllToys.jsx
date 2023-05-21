import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TableRow from './TableRow';

const AllToys = () => {

    const load = useLoaderData()
 
    const [subTotalToys, setSubTotal] = useState(load)
    

    const allToyHandler = () => {
            fetch('http://localhost:5000/toys')
                .then(res => res.json())
                .then(res => setSubTotal(res))
   }

    useEffect(() => {
        document.title = "toys-park || AllToys"
    }, [])
    
    
    const searchHandler = (e) => {
        e.preventDefault()
        const value = e.target.search.value
        
        fetch(`http://localhost:5000/search/${value}`)
            .then(res => res.json())
        .then(res=>setSubTotal(res))

}
     
    
    return (

        <section className='w-[90%] my-16 mx-auto'>
            <div className='mb-6 flex justify-between items-center'>
                <h1 className='text-xl'>Total toys : {subTotalToys.length}</h1>
                <form onSubmit={searchHandler}>
                    <div className=' flex gap-2'>
                        <input name='search' type="text" placeholder="search toy" className="input border border-pink-500  w-full max-w-xs" />
                        <input className='btn bg-orange-500' type="submit" value="search" />
                    </div>
                </form>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>seller</th>
                            <th>toy detials</th>
                            <th>category</th>
                            <th> </th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            subTotalToys.map(v => {
                                return <TableRow key={v._id} obj={v} />
                            })
                        }
                    </tbody>
                </table>
            </div>
                <div className=' mt-10'>
                    <button className='btn block mx-auto bg-pink-500' onClick={allToyHandler}>see All Toys</button>
                </div>

       </section>
    );
};

export default AllToys;