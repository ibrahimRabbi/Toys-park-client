import React, { useEffect } from 'react';
import Banner from '../banner/Banner';
import Gallery from '../Gallery/Gallery';
import CategoryTab from '../Shop/CategoryTab';
import Maruqee from '../marquee/Maruqee';
import PopularToy from '../popularToys/PopularToy';

const Home = () => {

    useEffect(() => {
        document.title = "toys-park || Home"
     },[])
   
    return (
        <div>
            <Banner />
            <Maruqee/>
            <Gallery/>
            <CategoryTab />
            <PopularToy/>
        </div>
    );
};

export default Home;