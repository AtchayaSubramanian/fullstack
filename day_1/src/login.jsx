// import "../assets/css/register.css"
// import { Form, ButtonToolbar, Button, Input, InputGroup, InputNumber } from 'rsuite';
// const Login=()=>{
//     return (
//       <div className='a'>
// <Form fluid>
// <Form.Group controlId="name-1">
//   <Form.ControlLabel>Username</Form.ControlLabel>
//   <Form.Control name="name" />
//   {/* <Form.HelpText>Required</Form.HelpText> */}
// </Form.Group>
// <Form.Group controlId="email-1">
//   <Form.ControlLabel>Email</Form.ControlLabel>
//   <Form.Control name="email" type="email" />
//   {/* <Form.HelpText>Required</Form.HelpText> */}
// </Form.Group>
// <Form.Group controlId="password-1">
//   <Form.ControlLabel>Password</Form.ControlLabel>
//   <Form.Control name="password" type="password" autoComplete="off" />
// </Form.Group>
// <Form.Group controlId="textarea-1">
//   <Form.ControlLabel>Textarea</Form.ControlLabel>
//   <Form.Control rows={5} name="textarea"  />
// </Form.Group>
// <Form.Group controlId="input-group">
//   <Form.ControlLabel>Input Group</Form.ControlLabel>
//   <InputGroup>
//     <InputGroup.Addon> @</InputGroup.Addon>
//     <Form.Control name="input-group" />
//   </InputGroup>
// </Form.Group>
// <Form.Group>
//   <Form.ControlLabel>InputNumber</Form.ControlLabel>
//   <Form.Control name="numder" accepter={InputNumber} />
// </Form.Group>
// <Form.Group>
//   <ButtonToolbar>
//     <Button appearance="primary">Submit</Button>
//     <Button appearance="default">Cancel</Button>
//   </ButtonToolbar>
// </Form.Group>
// </Form>
// </div>
//     )
// }
// export default Login
import { Link } from "react-router-dom";
//  import axios from "axios";
import React, { Component } from "react";
import "../assets/css/login.css";

class Login extends Component {

  render(){
    return(
      <div className="logLogin" >
    <div className="reg">    
        <form id="regform" name="suForm" >    
          
          <label className="name" id="name" ><b>Email ID:</b>
          </label>
          <input type="email" id="uname" placeholder="Email Id"  /> 
           
          <br /><br /> <br /><br /> 
          <label className="name" id="name1" ><b>Password:</b>
          </label>
          <input type="password" id="uname" placeholder="Password"  /> 
      
         
          <Link to="/NavigationBar"><button className="button1" type="submit"><Link to='/home'>Login</Link></button></Link>
          <br/>
          <Link to="/Reg"><p className="register-link1" id='reg-link'>Create an Account </p></Link>
        {/* <p className="register-link2"><Link to="/Regester">Forget Password?</Link> </p> */}
        </form>
      </div></div>
);
          }
        }
export default Login;