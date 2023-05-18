import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TableRow from './TableRow';

const AllToys = () => {

    const load = useLoaderData()
    console.log(load)
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
                        load.map(v => {
                            return <TableRow key={v._id} obj={v} />
                       })
                    }
                </tbody>
            </table>
        </div>

    );
};

export default AllToys;