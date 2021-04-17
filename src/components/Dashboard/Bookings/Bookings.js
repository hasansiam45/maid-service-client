import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Navbar from '../../Home/Navbar/Navbar';
const Bookings = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [bookings, setBookings] = useState([]);
    
    useEffect(() => {
    
     fetch('http://localhost:5000/bookings?email=' + loggedInUser.email)
         .then(res => res.json())
         .then(data => setBookings(data))
    
    }, [])
    return (
        <div>
            <Navbar></Navbar>
         <div style={{textAlign:'center', marginTop:'5%'}}>
            <h3>Welcome {loggedInUser.name}</h3>
            <h3>You have : {bookings.length} Bookings</h3>
            {
                bookings.map(booking => <div style={{textAlign: 'center', backgroundColor: 'black', padding:'40px',color:'white', width:'60%', marginLeft:'20%', marginBottom:'5%', borderRadius:'15px'}}>
                
                    <h5>Service : {booking.service}</h5>
                    <h5>Price: {booking.price}</h5>
                    <h5>Booking Time: {(new Date(booking.bookingTime).toDateString('dd-mm-yyyy'))}</h5>
                    
                
                   </div>
                )
            }
            </div>
            </div>
    );
}

export default Bookings;
