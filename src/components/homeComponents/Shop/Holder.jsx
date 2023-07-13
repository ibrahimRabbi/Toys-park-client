import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Card from './Card';

const Holder = ({ name }) => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`https://toys-park-server.vercel.app/toys?category=${name}`)
            .then(res => res.json())
            .then(res => setData(res))
    }, [])

    return (
        <div className='grid grid-cols-2 gap-10 mt-11'>
            {data.map(v => <Card obj={v} />)}
        </div>
    );
};

export default Holder;