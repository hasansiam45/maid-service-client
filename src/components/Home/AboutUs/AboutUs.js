import React from 'react';
import we from '../../../img/38.png'
const AboutUs = () => {
    return (
        <div className="container mt-5">
            <h2 className = "text-center h2 text-success" > About Us </h2>
            <div className="row mt-5">
                <div className="col-md-4 text-center">
                   <img style={{height: '350px', width: '350px'}} src={we} alt=""/>
                </div>
                
                <div className="col-md-8 px-5">
                    <h5 className="mt-4 mb-3">How It Works</h5>
                    <p>When the weekend finally arrives, you’d much rather put your feet up while a cleaning service does the work, rather than spend your precious downtime on your hands and knees scrubbing.</p> <br />
                    <p>Taking the stress out of any aspect of cleaning is what we specialise in. We will come to your premises and offer a free quote, so you know exactly what you’ll be spending</p>
                </div>
             
            </div>
        </div>
    );
}

export default AboutUs;
