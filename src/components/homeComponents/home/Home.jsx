import React from 'react';
import Banner from '../banner/Banner';
import Gallery from '../Gallery/Gallery';
import CategoryTab from '../Shop/CategoryTab';

const Home = () => {
    return (
        <div>
            <Banner />
            <Gallery/>
            <CategoryTab />
        </div>
    );
};

export default Home;