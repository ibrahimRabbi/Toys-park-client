import React from 'react';
import Banner from '../banner/Banner';
import Gallery from '../Gallery/Gallery';
import CategoryTab from '../Shop/CategoryTab';

const Home = () => {
    return (
        <div>
            <Banner />
            <CategoryTab />
            <Gallery/>
        </div>
    );
};

export default Home;