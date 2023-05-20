import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TableRow from './TableRow';

const AllToys = () => {

    const load = useLoaderData()
 
    const [subTotalToys, setSubTotal] = useState(load)
    console.log(subTotalToys)

    const allToyHandler = () => {
            fetch('http://localhost:5000/toys')
                .then(res => res.json())
                .then(res => setSubTotal(res))
   }


     
    
    return (

        <div className="overflow-x-auto w-[90%] my-11 mx-auto">
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
                            return <TableRow key={v._id} obj={v}/>
                       })
                    }
                </tbody>
            </table>

            <div className=' mt-10'>
                <button className='btn block mx-auto bg-pink-500' onClick={allToyHandler}>see All Toys</button>
            </div>
        </div>

    );
};

export default AllToys;