import React from 'react';

const ServiceDetails = ({service}) => {
    return (
        <div className="col-md-4">
        <div className="p-5 mb-3 bg-success rounded">
            <img style={{width: '250px', height: '250px', marginBottom: '30px'}} className="img-fluid" src={service.img} alt=""/>
            <h3>{service.name}</h3>
            <h6>{service.price}</h6>
            <button className="btn btn-warning">Book</button>
            </div>
        </div>
    );
}

export default ServiceDetails;
