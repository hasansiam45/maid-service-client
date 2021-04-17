import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import {
    useForm
} from "react-hook-form";
import Navbar from '../Navbar/Navbar';
const Book = () => {
    
    const { id } = useParams();
    const [allService, setAllService] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    useEffect(() => {

  fetch('http://localhost:5000/services')
      .then(res => res.json())
      .then(data => {
          console.log(data)
          setAllService(data)

      })

    }, [])
    
    const serviceDetails = allService.find(details => details._id == id);
    const onSubmit = data => {
           const bookingDetails = { ...loggedInUser, service: serviceDetails?.service, price: serviceDetails?.price, phone: data.phone, address: data.address, bookingTime: new Date() };
           
          fetch('http://localhost:5000/addBooking', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(bookingDetails)
          
          })
           .then(res => res.json())
              .then(data => {
                   
                  if (data) {
                      alert('Booking Placed Successfully!')
                  }
              })
        }
    return (
        <div>
            <Navbar></Navbar>
            <div className="container">
            <div className="row my-3">
            <div className="col-md-6 text-center">
                <h1 className="p-2">Welcome {loggedInUser.name}</h1>
                
                <h2>{serviceDetails?.service}</h2>
                <img style={{height: '350px', width: '350px'}} src={serviceDetails?.imgUrl} alt="" />
                <h5>Price: {serviceDetails?.price}$/day</h5>

                <h3 className="p-2">Want this {serviceDetails?.name} service ? Book Now! =>></h3>
          
                
            </div>
            
            <div className="col-md-6 text-center bg-dark p-3 my-3 rounded">
            <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                    
                    <input className="m-2" {...register("address")} placeholder="Your Address"  /> <br/>
                    
                    <input className="m-2" {...register("phone")} placeholder="Your number" /> <br/>
                                                
                  <input className="mt-3 btn btn-warning" type="submit" value="Place Booking" />
                    
                    
                    </form>
            </div>

            </div>
        </div>
    </div>
    );
}

export default Book;
