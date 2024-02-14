import React, { useState } from 'react';
import { Link } from 'react-router-dom';
 import '../assets/css/admindashboard.css'; 
import NavigationBar2 from './eventnav';
import PieChart from './chart';
// import Dchart from './dchart';

const DashboardAdmin= () => {
 

  return (
    <div>
      <div>
    <NavigationBar2/>
      </div>
    <div className='whole-dashboard'>
       
      <div className='ad-sidebar'>
          <ul>
          <li>
     
                  <Link to={`/home`} className="add-events-link" color="white">

                    Home
                  </Link>
                </li>
                <li>
                  <Link to={`/profiledisplay`} className="add-events-link" color="white">

                    My Profile
                  </Link>
                </li>
               
                <li>
                  {/* <Link to={/all-bookings} className="all-bookings-link">
                    All Bookings
                  </Link> */}
                </li>
                <li>
                  {/* <Link to={/all-event} className="all-events-link">
                    All Events
                  </Link> */}
                </li>
                <li>
                  {/* <Link to={/allvenues} className="all-events-link">
                    All Venues
                  </Link> */}
                </li>
                <li>
                  {/* <Link to={/logout} className="logout-btn">
                    Logout
                  </Link> */}
                </li>
              </ul>

      </div>
    <div className='main-dashboard'>
        <div className='ad-d2'>
          Admin 
        </div>
        <div>
        <PieChart/>
      </div>
        <div className='ad-d3'>
        <div className="dashboard-container">
                <div className="dashboard-card">
                    <h4>Total Bookings</h4>
                    <h4>10</h4>
                </div>
                {/* <div className="dashboard-card">
                    <h4>Total Earnings</h4>
                    <h4>10000$</h4>
                </div>
                <div className="dashboard-card">
                    <h4>Bookings/Day</h4>
                    <h4>3</h4>
                </div> */}
                <div className="dashboard-card">
                    <h4>Available Events</h4>
                    <h4>7</h4>
                </div>
            </div>
        </div>

        {/* <div className='db-chart'>
          <Dchart/>

        </div> */}
        
      </div>
    </div>
    </div>
  );
};

export default DashboardAdmin;