import "../assets/css/register.css";
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react";
import { signUp } from "../services/auth";

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Here you can perform form submission logic, like sending data to a backend
  //   console.log('Form submitted');
  // };

  // const handleConfirmPasswordChange = (e) => {
  //   setConfirmPassword(e.target.value);
  // };
  
  const handleFormSubmit =()=>{
      
    const form={
      email:email,
      password:password,
      name:name
      
    }
    console.log(form);
    signUp(form);
  
  // }
  }
  return (
    <div className="pa">
      <div>
      <div>
        <div>
    <div className="register-container">
      <h2>Register</h2>
      <form >
        <div className="amsaven">
          <label  className="amsave"htmlFor="username">Username:</label>
          <input className="amsav" type="text" id="username" name="username" required
                value={name}
                onChange={handleNameChange} />
    
        </div>
        <div className="amsaven">
          <label className="amsave"htmlFor="email">Email:</label>
          <input className="amsav"type="email" id="email" name="email" required 
           value={email}
           onChange={handleEmailChange}/>
        
          

        </div>
        <div className="amsaven">
          <label className="amsave"htmlFor="password">Password:</label>
          <input className="amsav"type="password" id="password" name="password" required 
            value={password}
            onChange={handlePasswordChange}/>
        
        </div>
     {/* <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" required />
          value={password}
                onChange={handleConfirmPasswordChange}
        </div>   */}
        <button type="submit" className="register-button" onClick={handleFormSubmit}>Register</button>
      </form>
      <p className="ams">Already have an account? <Link to="/login">Login</Link></p>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
  }


export default Register;

