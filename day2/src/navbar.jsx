import React from 'react';
import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';
import "../assets/css/nav.css"
import { Link } from 'react-router-dom';
import 'rsuite/dist/rsuite.min.css';

function NavigationBar() {
  return (
    <div className='N' style={{ color: 'black' }}>
      <div>
        <Navbar
          className='N'
          style={{
            background: 'linear-gradient(to right, #ff7e5f, #feb47b)', // Gradient background
            transition: 'background 0.3s ease', // Background color transition
          }}
        >
          <Navbar.Brand href="#"></Navbar.Brand>
          <Nav>
            <button>
              <Nav.Item icon={<HomeIcon />}>
                <Link to='/home'>HOME</Link>
              </Nav.Item>
            </button>
            <button>
              <Nav.Item>
                <Link to='/register'>SIGN IN</Link>
              </Nav.Item>
            </button>
            <button>
              <Nav.Item>
                <Link to='/login'>LOG IN</Link>
              </Nav.Item>
            </button>
          </Nav>
          <Nav pullRight>
            <button>
              <Nav.Item>
                <Link
                  to='/dash'
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                    position: 'relative',
                  }}
                >
                  DASHBOARD
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      height: 2,
                      width: 0,
                      backgroundColor: 'black',
                      transition: 'width 0.3s ease',
                    }}
                  ></span>
                </Link>
              </Nav.Item>
            </button>
            <button>
              <Nav.Item>LOGOUT</Nav.Item>
            </button>
          </Nav>
        </Navbar>
      </div>
    </div>
  );
}

export default NavigationBar;
