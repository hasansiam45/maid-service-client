import React from 'react';
import {
    useForm
} from "react-hook-form";
import Navbar from '../Navbar/Navbar';

const AddReview = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
        const onSubmit = data => {
            const reviewData = {
                name: data.name,
                review: data.review
            }
            console.log(reviewData)
            const url = `https://mysterious-peak-96763.herokuapp.com/addReviews`

            fetch(url, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(reviewData)
                })
                .then(res => console.log(res))
        };
    return (
        <div>
            
            <Navbar></Navbar>
            <div className="text-center">
             
              <h2>Add Your Review Here </h2>
            <form style={{marginLeft: '3%'}} onSubmit={handleSubmit(onSubmit)}>
              
                <input placeholder="Your Name" {...register("name")}/> <br/> <br/>
                
                <textarea placeholder="Your Review" cols="30" rows="10" {...register("review")}> </textarea> <br/> <br/>
                    
                <input className="btn btn-primary" type="submit"/>
                            
                </form>
            </div>
        </div>
    );
}

export default AddReview;
