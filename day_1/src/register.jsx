import { Link } from "react-router-dom";
import "../assets/css/register.css";
import React, { Component } from "react";

class Reg extends Component {

  render(){
    return(
      <div className="log" >
    <div className="ll">    
        <form id="regform" name="suForm" onSubmit={this.handleSubmit}>    
          <label className="name" ><b>First Name:</b></label><br/><br/>
          <input type="text" name="xname" id="xname" placeholder="First Name" />   
          <br/><br/> 
          <label className="name"><b>Last Name:</b></label><br/><br/>
          <input type="text" id="xname" placeholder="Last Name"  /> 
          <br /><br />
          <label className="name" ><b>Email ID:</b></label><br/><br/>
          <input type="email" id="xname" placeholder="Email Id"  /> 
          <br/><br/>
          <label className="name" ><b>Contact No:</b></label><br/><br/>
          <input type="text" id="xname" placeholder="Contact Number"  /> 
          <br /><br /> 
          <label className="name" ><b>Password:</b></label><br/><br/>
          <input type="password" id="xname" placeholder="Password"  /> 
          <br/><br/>
          <label className="name"><b>Confirm Password:</b></label><br/><br/>
          <input type="password" id="xname" placeholder="Confirm Password"/>
          <br/><br/>
          <Link to="/NavigationBar"><button className="button2" type="submit">Register</button></Link>
        </form>
      </div></div>
);
          }
        }
export default Reg;