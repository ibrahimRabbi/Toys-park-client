import React, { useEffect,useState } from 'react';
import Card from './Card';
const Disnap = () => {
    const [disnap, setDisnap] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/category/disnap')
            .then(res => res.json())
            .then(res => setDisnap(res))
    }, [])
    return (
        <div className='grid grid-cols-3 gap-10 my-14'>
            {
                disnap.map(v => <Card obj={v} key={v._id} />)
            }
        </div>
    );
};

export default Disnap;