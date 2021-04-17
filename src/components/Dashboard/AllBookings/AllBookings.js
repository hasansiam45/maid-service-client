import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Navbar from '../../Home/Navbar/Navbar';
const AllBookings = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [allBooking, setAllBooking] = useState([]);
    
    useEffect(() => {
        fetch('https://mysterious-peak-96763.herokuapp.com/allBookings')
            .then(res => res.json())
        .then(data => setAllBooking(data))
    
    }, [])
    return (
        <div>
            <Navbar></Navbar>
             <div style={{textAlign:'center', marginTop:'5%'}}>
            <h3>Welcome {loggedInUser.name}</h3>
            <h3>Total Bookings: {allBooking.length}</h3>
            
               {
                allBooking.map(booking => <div style={{textAlign: 'center', backgroundColor: 'black', padding:'40px',color:'white', width:'60%', marginLeft:'20%', marginBottom:'5%', borderRadius:'15px'}}>
                
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

export default AllBookings;

