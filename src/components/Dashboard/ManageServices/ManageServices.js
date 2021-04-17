import React, {useState,useEffect} from 'react';
import Navbar from '../../Home/Navbar/Navbar';
const ManageServices = () => {
    
    const [services, setServices] = useState([]);

        useEffect(() => {
            fetch('http://localhost:5000/services')
                .then(res => res.json())
                .then(data => setServices(data))

        }, [])

        const handleDelete = id => {
           
            fetch(`http://localhost:5000/delete/${id}`, {

              method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                
                    console.log('deleted', result)
                })
        }
    return (
        <div>
            <Navbar></Navbar>
        <div className="mt-3">
     

            {
                services.map(service => <div className = "row text-center bg-success p-2 border-bottom border-dark font-weight-bold" >
                
                    <span className="col-md-4">{service.service}</span> <span className="col-md-4">{service.price}$/day</span> <span className="col-md-4"> <button className="btn btn-danger" onClick={() => handleDelete(service._id)}>Delete</button> </span>
                
                </div>)
            }
            
        </div>
       </div>        
    );
}

export default ManageServices;