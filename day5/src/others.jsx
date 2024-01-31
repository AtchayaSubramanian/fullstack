import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import NavigationBar from '../components/navbar';
// import { Style } from '@mui/icons-material';





const footerStyle = {
    backgroundColor: 'grey',
    color: '#fff',
    padding: '2rem 0',
    textAlign: 'center',
  };
function Info() {


  return (
    <>
   {/*  <Nav/> */}
   <NavigationBar/>
    <div>
<br></br>
    <h1 style={{ textAlign: 'center',fontSize:50 ,fontFamily:'cursive',color:'black'}}>Other Parties and Events</h1>

    </div>
    <div style={{ display: 'flex', alignItems: 'center' ,marginTop:'80px'}}>
  <div>
    <img
      src="https://themers.com/wp-content/uploads/2019/01/eve.jpg"
      alt="Yoga"
      style={{ maxWidth: '100%', height: 'auto' ,width:900}}
    />
  </div>
  <div className="homebg" style={{paddingRight:'20px'}}>
   <h1 style={{textAlign:'center',fontSize:40,color:'black' }}> Corporate & Commercial Events </h1>
   <p style={{textAlign:'center',marginTop:'50px',fontSize:18,marginLeft:40,marginRight:20}}>
   Our innovation and creativity incorporates up and coming ideas and 
   current trends which will add a unique flair in creating your one-of-a kind event! 
   Call Themers for a complimentary consultation today!</p>
   <button style={{marginTop:60,marginLeft:400,fontSize:20}}><Link to='/corporate'>Learn more</Link></button>
  </div>
</div>
<br></br><br></br>
<div style={{ display: 'flex', alignItems: 'center' }}>
  <div style={{ textAlign: 'left', marginRight: '20px',paddingLeft:'20px'}}>
    <h1 style={{textAlign:'center',color:'black' }}>Private Parties & Social Events</h1>
    <p style={{textAlign:'center',marginTop:'50px',fontSize:18,marginLeft:40,marginRight:20}}>
    Our uniquely creative and talented team of party planners and designers not only brings you innovative ideas, 
    we bring a solid, timely approach to planning your social event. We are a terrific resource for
     you as we look at every detail as an opportunity to make your event shine. 
</p>
<button style={{marginTop:60,marginLeft:400,fontSize:20}}>Learn more</button>
  </div>
  <div>
    <img 
      src='https://themers.com/wp-content/uploads/2019/01/13308646_854295478037027_5865414649766235291_o.jpg'
      alt='Yoga'
      style={{ maxWidth:'100%', height:'auto' ,width:1100}}
    />
  </div>
</div>
<br></br><br></br>
<div style={{ display: 'flex', alignItems: 'center' }}>
  <div>
    <img
      src="https://www.birthdaybumps.co.in/images/services/Balloon-Decoration/Balloon-Arches/large/img-04.jpg"
      alt="Yoga"
      style={{ maxWidth: '100%', height: 'auto' ,width:900}}
    />
  </div>
  <div className="homebg" style={{paddingRight:'20px'}}>
   <h1 style={{textAlign:'center',fontSize:40,color:'black' }}> Bithday Party </h1>
   <p style={{textAlign:'center',marginTop:'50px',fontSize:18,marginLeft:40,marginRight:20}}>
   Our innovation and creativity incorporates up and coming ideas and 
   current trends which will add a unique flair in creating your one-of-a kind event! 
   Call Themers for a complimentary consultation today!</p>
   <button style={{marginTop:60,marginLeft:400,fontSize:20}}>Learn more</button>
  </div>
</div>
<footer style={footerStyle}>
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>Your Company is dedicated to providing innovative solutions...</p>
        </div>
        <div className="footer-section">
      
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: info@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
    </>
  );
}
export default Info;