import React from 'react';
import NavigationBar2 from './eventnav';

const PaymentComponent = () => {
  const uniqueClassName = "lightVioletTheme"; // Unique class name

  const styles = {
    container: {
      backgroundColor: '#f2e6ff', // Light violet background color
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      width: '400px', // Adjust as needed
      margin: '0 auto', // Center display
    },
    title: {
      fontSize: '24px',
      color: '#663399', // Dark violet text color
      marginBottom: '20px', // Increase space
      textAlign: 'center', // Center title
    },
    card: {
      backgroundColor: '#ffffff', // White card background
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      marginBottom: '20px',
      animation: 'fadeIn 1s ease', // Card animation
    },
    label: {
      fontSize: '18px',
      color: '#333333', // Dark text color
      marginBottom: '10px',
    },
    input: {
      width: '100%',
      padding: '10px',
      borderRadius: '4px',
      border: '1px solid #cccccc',
      marginBottom: '20px',
    },
    button: {
      backgroundColor: '#D8BFD8', // Dark violet button color
      color: 'black', // White button text color
      padding: '10px 20px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      width: '100%', // Full width button
    },
  };

  return (
    <div>
        <div>
           <NavigationBar2/>
        </div>
    <div className={uniqueClassName} style={styles.container}>
      <h2 style={styles.title}>Payment Details</h2>
      <div style={styles.card}>
        <label style={styles.label}>Card Number:</label>
        <input type="text" style={styles.input} />
        <label style={styles.label}>Expiration Date:</label>
        <input type="text" style={styles.input} />
        <label style={styles.label}>CVV:</label>
        <input type="text" style={styles.input} />
      </div>
      <button style={styles.button}>Submit Payment</button>
    </div>
    </div>
  );
};

export default PaymentComponent;
