import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import {
    useForm
} from "react-hook-form";
import Navbar from '../Navbar/Navbar';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
const Book = () => {
    
    const { id } = useParams();
    const [allService, setAllService] = useState([]);
    const [formData, setFormData] = useState(null);
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
         setFormData(data)
    }
    const handlePaymentSuccess = paymentId => {
      const bookingDetails = { ...loggedInUser, service: serviceDetails?.service, price: serviceDetails?.price, phone: formData.phone, address: formData.address, paymentId, bookingTime: new Date() };
           
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
      
                        <div className="col-md-6 text-center bg-dark p-3 my-3 rounded" style={{display: formData? 'none' : 'block'}}>
                        <form className="mt-5 text-white" onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="">Name: </label>
                            <input className="mx-2" {...register("name")} defaultValue= {loggedInUser.name} /> <br/>
                            <label htmlFor="">Service: </label>
                            <input className="mx-2" {...register("service")} defaultValue= {serviceDetails?.service} /> <br />
                            <label htmlFor="">Price: </label>
                            <input className="mx-2" {...register("price")} defaultValue= {serviceDetails?.price} /> <br/>
                             <label htmlFor="">Your Address: </label>
                            <input className="m-2" {...register("address")} placeholder=" Your Address" /> <br />
                            <label htmlFor="">Your Number: </label>
                            <input className="m-2" {...register("phone")} placeholder=" Your number" /> <br/>
                                                        
                            <input className="mt-3 btn btn-warning" type="submit" value="Place Booking" />
                            
                    
                        </form>
                        </div>
                    
                    
                    <div className="col-md-6">
                        <div style={{display: formData? 'block' : 'none'}}>
                            <ProcessPayment handlePaymentSuccess={handlePaymentSuccess}></ProcessPayment>
                        </div>
                    </div>

            </div>
        </div>
    </div>
    );
}

export default Book;
