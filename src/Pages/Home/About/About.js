import React from 'react';
import img from '../../../assets/images/banner/photographersrightsUS.jpg'

const About = () => {
    return (
        <div className="hero mt-20 ">
            <div className="hero-content flex-col lg:flex-row">
                <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Photography make us happy take a shot</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                </div>
            </div>
        </div>
    );
};

export default About;