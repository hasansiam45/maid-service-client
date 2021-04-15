import React from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import clean from '../../../img/clean.jpg';
import wash from '../../../img/wash1.jpg';
import all from '../../../img/all (2).jpg';

const serviceData = [
    {
        name: 'Cleaning Home',
        price: '15$/hour',
        img: clean
    },
      {
        name: 'Washing Cloth',
          price: '10$/hour',
          img: wash
    },
    {
        name: 'All Work',
        price: '80$/day',
        img: all
    }

]
const Services = () => {
    return (
        <div className="text-center">
            <h2 className="m-5">Our Services</h2>
            
            <div className="row">
                {
                serviceData.map(service => <ServiceDetails service={service}></ServiceDetails>)
                }
            </div>
        </div>
    );
}

export default Services;
