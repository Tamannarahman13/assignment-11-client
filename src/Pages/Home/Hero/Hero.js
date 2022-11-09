import React from 'react';

const Hero = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/wBN76Yx/10-best-wildlife-photography.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">EVERY SHOTS WE ARE WITH YOU</h1>
                    <p className="mb-5">Photography is the art, application, and practice of creating durable images by recording light, either electronically by means of an image sensor, or chemically by means of a light-sensitive material such as photographic film.</p>
                    <button className="btn btn-accent">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;