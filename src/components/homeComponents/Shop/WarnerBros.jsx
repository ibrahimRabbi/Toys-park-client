import React, { useEffect,useState } from 'react';
import Card from './Card';
const WarnerBros = () => {
    const [warner, setWarner] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/category/warner bros')
            .then(res => res.json())
            .then(res => setWarner(res))
    }, [])
    return (
        <div className='grid grid-cols-3 gap-10 my-14'>
            {
                warner.map(v => <Card obj={v} key={v._id} />)
            }
        </div>
    );
};

export default WarnerBros;