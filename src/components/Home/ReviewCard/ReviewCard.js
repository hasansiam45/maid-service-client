import React from 'react';
import happy from '../../../img/happy.png'
const ReviewCard = ({ review }) => {
    console.log(review)
    return (
       
            <div className="col-md-4">
                <div>
                    <img style={{ height: '100px', width: '100px', borderRadius: '50%' }} src={happy} alt="" />
                    <h3 className="mt-4 mb-4 text-success">{review.name}</h3>
                    <p>{review.review}</p>
                </div>
            </div>
    
    );
}

export default ReviewCard;
