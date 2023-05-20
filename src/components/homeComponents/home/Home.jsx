import React from 'react';
import Banner from '../banner/Banner';
import Gallery from '../Gallery/Gallery';
import CategoryTab from '../Shop/CategoryTab';
import Maruqee from '../marquee/Maruqee';

const Home = () => {
    return (
        <div>
            <Banner />
            <Maruqee/>
            <Gallery/>
            <CategoryTab />
        </div>
    );
};

export default Home;