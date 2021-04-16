import React, {useEffect, useState} from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';


const Services = () => {
    const [serviceData, setServiceData] = useState([]);
    
    useEffect(() => {
      fetch('http://localhost:5000/services')
          .then(res => res.json())
          .then(data => {
              console.log(data)
              setServiceData(data)

          })
    
    },[])
    return (
        <div className="ml-5 mr-5 text-center">
            <h2 className="mb-5">Our Services</h2>
            
            <div className="row">
                {
                serviceData.map(service => <ServiceDetails service={service}></ServiceDetails>)
                }
            </div>
        </div>
    );
}

export default Services;
