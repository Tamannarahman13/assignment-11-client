import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const ServiceDetail = () => {
    const { user } = useContext(AuthContext);
    const { _id, img, price, description, name } = useLoaderData()

    const handlePlaceReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'unregistered';
        const message = form.message.value;

        const review = {
            service: _id,
            customer: name,
            email,
            message,

        }

        fetch('https://assignment-11-server-alpha.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledge) {
                    alert('review successfully')
                    form.reset()
                }
            })
            .catch(err => console.error(err));


    }

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
            <h1 className='text-xl'>Add Review</h1>
            <form onSubmit={handlePlaceReview}>
                <div className='grid grid-cols-1 gap-4'>
                    <input name='name' type="text" placeholder="name" className="input input-bordered w-full " required />
                    <input name='email' type="text" placeholder="email" defaultValue={user?.email} className="input input-bordered w-full " required />

                </div>
                <textarea name='message' className="textarea textarea-bordered h-24 w-full" placeholder="your review"></textarea>
                <input className='btn ' type="submit" value="place your review" />
            </form>


        </div>
    );
};

export default ServiceDetail;