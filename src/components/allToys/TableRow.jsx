import React from 'react';
import { Link } from 'react-router-dom';

const TableRow = ({ obj }) => {
    const {_id,name,email,price,toyName,photo,stock,category} = obj
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold text-xl">{name}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>
            <td className='font-semibold text-md'>
                <h1>name :{toyName}</h1>
                <p>price : ${price}</p>
                <span>available : {stock}</span>

            </td>
            <td>{category}</td>
            <th>
                <Link to={`/alltoys/${_id}`} className="p-3 bg-pink-500 text-slate-50 rounded-lg"> view details</Link>
            </th>
        </tr>
    );
};

export default TableRow;