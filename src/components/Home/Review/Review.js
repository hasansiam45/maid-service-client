import React, {useEffect, useState} from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';

const Review = () => {
    const [reviewData, setReviewData] = useState([]);
    
    useEffect(() => {
    
       fetch('http://localhost:5000/reviews')
          .then(res => res.json())
          .then(data => {
              console.log(data)
              setReviewData(data)

          })
    
    }, [])
    return (
        <div className="container mt-5 text-center">
            <h2 className="text-success">Happy Customers</h2>
            
            <div className="row mt-5">
                {
                  reviewData.map(review => <ReviewCard review={review}></ReviewCard>)
                }
            </div>
        </div>
    );
}

export default Review;


//    {
//        name: 'John Smith',
//        review: 'They are very professional and doing a very good job cleaning te house. I highly recommend them'
//    }, {
//        name: 'Alexanda Lara',
//        review: 'I have never seen a company like tis. They really do care of their clients. I will definitely take their offer again'
//    }, {
//        name: 'John Smith',
//        review: 'They are very reasonable with their pricing. They are very caring with their work. They are really trustable. I am happy with them'
//    }