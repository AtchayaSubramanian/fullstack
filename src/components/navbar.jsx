import React from 'react';
// import { Navbar, Nav } from 'rsuite';
// import HomeIcon from '@rsuite/icons/legacy/Home';
// import CogIcon from '@rsuite/icons/legacy/Cog';
// import "../assets/css/nav.css"
 import { Link } from 'react-router-dom';
// import 'rsuite/dist/rsuite.min.css';


function NavigationBar() {
    return (
        <div className="navbar" style={styles.navBar}>
          <div className="logo-container" style={styles.logoContainer}>
            <img src="https://tse1.mm.bing.net/th?id=OIP.-aJ0ec1EYs7oDEEiR-8PNAHaHr&pid=Api&P=0&h=180" alt="Party Logo" className="logo" style={styles.logo10} />
            <span className="app-name" style={{...styles.appName1,marginLeft:'50px'}}>Party Pros</span>
          </div>
          <div className="action-icons" style={styles.actionIcons}>
           
          <Link to='/home' style={{textDecoration:'none'}}><li style={{ display: 'inline', marginLeft: '30px',fontSize:'20PX' ,}}><a href="#" style={{ color: 'black', textDecoration: 'none' }}>HOME</a></li></Link>
          <Link to='/payment' style={{textDecoration:'none'}}><li style={{ display: 'inline', marginLeft: '30px',fontSize:'20PX' ,}}><a href="#" style={{ color: 'black', textDecoration: 'none' }}>PAYMENT</a></li></Link>
           <Link to='/login' style={{textDecoration:'none'}}><li style={{ display: 'inline', marginLeft: '30px',fontSize:'20PX' ,}}><a href="#" style={{ color: 'black', textDecoration: 'none' }}>SIGN IN</a></li></Link>
          <Link to='/register' style={{textDecoration:'none'}}><li style={{ display: 'inline', marginLeft: '30px' ,fontSize:'20PX'}}><a href="#" style={{ color: 'black', textDecoration: 'none' }}>SIGN UP</a></li></Link>
          <Link to='/login' style={{textDecoration:'none'}}><li style={{ display: 'inline', marginLeft: '30px',fontSize:'20PX' }}><a href="#" style={{ color: 'BLACK', textDecoration: 'none' }}>LOGOUT</a></li></Link>
          
          </div>
        </div>
      );
    };
    
    const styles = {
      navBar: {
        backgroundColor: '#D8BFD8', // Light violet background color
        padding: '14px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      logoContainer: {
        display: 'flex',
        alignItems: 'center',
      },
      logo10: {
        height: '60px',
        marginRight: '10px',
        width:'70px'
      },
      appName1:{
        
        fontSize: '44px',
        color: 'black',
        fontFamily: 'cursive'
        
      },
      actionIcons: {
        display: 'flex',
        alignItems: 'center',
      },
      icon: {
        fontSize: '24px',
        marginLeft: '10px',
        cursor: 'pointer',
      },
    };
 
  

export default NavigationBar;
