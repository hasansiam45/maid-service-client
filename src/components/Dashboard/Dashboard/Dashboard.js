import React from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
const Dashboard = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="row">
                <div className="col-md-2">
                <Sidebar></Sidebar>
                </div>
            </div>
         </div>
    );
}

export default Dashboard;
