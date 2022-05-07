import React from 'react';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';
import Reviews from '../Reviews/Reviews';

import Sponsors from '../Sponsors/Sponsors';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
            <Reviews></Reviews>
            <Sponsors></Sponsors>
        </div>
    );
};

export default Home;