import React,{useEffect,useState} from 'react';
import Card from './Card';

const Marvel = () => {

    const [marvel, setMarvel] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/category/marvel')
            .then(res => res.json())
            .then(res => setMarvel(res))
    }, [])


    return (
        <div className='grid grid-cols-3 gap-10 my-14'>
          {
            marvel.map(v=> <Card obj={v} key={v._id}/>)    
          }
        </div>
    );
};

export default Marvel;