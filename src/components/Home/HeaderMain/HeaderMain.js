import React from 'react';
import './HeaderMain.css';
import img from '../../../img/bg.jpg';
const HeaderMain = () => {
    return (
             <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-6 offset-md-1">
                <h1>Welcome to our Maid Service</h1>
                <p className="text-secondary mt-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias saepe, natus sit hic ex velit commodi, repellat obcaecati nesciunt vero repellendus aut eius veritatis qui voluptatem beatae quae, inventore ad.</p>
            
            </div>
            <div className="col-md-4">
                <img src={img} alt="" className="img-fluid"/>
            </div>
        </main>
    );
}

export default HeaderMain;
