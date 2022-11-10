import React, { useEffect, useState } from 'react';
import AllReviewsRow from './AllReviewsRow';

const AllReviews = () => {
    const [allReviews, setAllReviews] = useState([]);

    useEffect(() => {
        fetch('https://assignment-11-server-alpha.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setAllReviews(data))
    }, [])

    return (
        <div>
            <h1 className='text-2xl font-bold mt-10'>All reviews</h1>
            <div className="overflow-x-auto w-full mt-8 mb-8">
                <table className="table w-full">

                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>



                        {
                            allReviews.map(allReview => <AllReviewsRow
                                key={allReview._id}
                                allReview={allReview}

                            ></AllReviewsRow>)
                        }




                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default AllReviews;