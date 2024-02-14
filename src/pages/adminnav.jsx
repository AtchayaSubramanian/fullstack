import React from 'react';
import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';
import "../assets/css/nav.css"
import { Link } from 'react-router-dom';
import 'rsuite/dist/rsuite.min.css';
function NavigationBar1() {
  return (
    
  <div className='N'>
      <Navbar className='N'>
        <Navbar.Brand href="#"></Navbar.Brand>
        <Nav>
          <Nav.Item icon={<HomeIcon />}>ADD EVENT</Nav.Item>
         <Nav.Item>EDIT</Nav.Item>
          <Nav.Item>DELETE</Nav.Item>
          <Nav.Item>BOOKING</Nav.Item>
          <Nav.Item>LOGOUT</Nav.Item>
          {/* <Nav.Menu title="ABOUT">
            <Nav.Item>Company</Nav.Item>
            <Nav.Item>Team</Nav.Item>
            <Nav.Menu title="Contact">
              <Nav.Item>Via email</Nav.Item>
              <Nav.Item>Via telephone</Nav.Item>
            </Nav.Menu>
          </Nav.Menu> */}
        </Nav>
        <Nav pullRight>
          <Nav.Item icon={<CogIcon />}>LOGOUT</Nav.Item>
        </Nav>
      </Navbar>
      </div>
    );
    
  
}

export default NavigationBar1;
