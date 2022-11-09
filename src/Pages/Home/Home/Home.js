import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            {/* <Banner></Banner> */}
            <Hero></Hero>
            <Services></Services>
            <About></About>
        </div>
    );
};

export default Home;