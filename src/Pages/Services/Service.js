import React from 'react';

const Service = ({ service }) => {
    const { name, description, img, price } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl">{name}</h2>
                <p>{description}</p>
                <h3 className='font-bold'>Price:{price}</h3>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;