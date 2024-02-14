
import "../assets/css/login.css";
import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform form submission logic, like sending data to a backend
    console.log('Form submitted');
  };
  

  return (
    <div className="pa1">
    
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-grou">
          <label className="forlabel" htmlFor="email">Email:</label>
          <input className="forinput" type="email" id="email" name="email" required />
         
        </div>
        <div className="form-grou">
          <label className="forlabel" htmlFor="password">Password:</label>
          <input  className="forinput"  type="password" id="password" name="password" required />
          <h1 className="BUF">USER</h1>
        </div>
        <Link to='/home'><button type="submit" className="login-button">Login</button></Link>
        <h1  className="BUF">ADMIN</h1>
        <Link to='/admindashboard'><button type="submit" className="login-button">Login</button></Link>
      </form>
      <p className="san">Don't have an account? <Link to="/register">Register</Link></p>
    </div>
    </div>
  );
};

export default Login;
