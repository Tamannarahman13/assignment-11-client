import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetail = () => {

    const handleReview = () => {

    }

    const { _id, img, price, description, name } = useLoaderData()
    return (
        <div className=''>
            <div className="card card-compact  w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p className='font-bold'>Price:{price}</p>

                </div>
            </div>
            <div>
                <h1 className='text-xl'>Add Review</h1>
                <textarea className='border-2' name="" id="" cols="60"></textarea>

            </div>
            <button onClick={handleReview} className="btn btn-active btn-accent text-white">Review</button>

        </div>
    );
};

export default ServiceDetail;