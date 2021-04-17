import React from 'react';
import {
    useHistory
} from 'react-router-dom';
import './ServiceDetails.css';
const ServiceDetails = ({service}) => {

        const history = useHistory()

        const handleClick = (id) => {

            history.push(`/book/${id}`);
        }
    return (
        <div className = "col-md-4">
        <div onClick={() => handleClick(service._id)} className="p-5 mb-3 rounded serviceDiv">
            <img style={{width: '250px', height: '250px', marginBottom: '30px', borderTopLeftRadius: '45px', borderBottomRightRadius: '45px'}} className="img-fluid" src={service.imgUrl} alt=""/>
            <h3>{service.service}</h3>
            <h6>{service.price}$/day</h6>
            </div>
        </div>
    );
}

export default ServiceDetails;
