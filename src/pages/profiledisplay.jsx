import React from 'react';
import NavigationBar2 from './eventnav';

const ProfileDisplay = () => {
  return (
    <div>
      <div>
        <NavigationBar2/>
      </div>
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f5f5', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ maxWidth: '600px', backgroundColor: '#fff', borderRadius: '10px', padding: '40px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)' }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <img src="profile.jpg" alt="Profile Picture" style={{ width: '150px', height: '150px', borderRadius: '50%', border: '5px solid #fff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }} />
          <h2 style={{ marginTop: '20px', color: '#333' }}>John Doe</h2>
          <p style={{ fontSize: '18px', color: '#666', fontWeight: 'bold', marginBottom: '10px' }}>Frontend Developer</p>
          <p style={{ fontSize: '16px', color: '#999', marginBottom: '20px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget urna velit.</p>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ color: '#333', marginBottom: '10px' }}>Contact Information</h3>
          <ul style={{ listStyle: 'none', padding: '0' }}>
            <li style={{ marginBottom: '10px', fontSize: '16px', color: '#666' }}><strong>Email:</strong> john.doe@example.com</li>
            <li style={{ marginBottom: '10px', fontSize: '16px', color: '#666' }}><strong>Phone:</strong> +1234567890</li>
            <li style={{ marginBottom: '10px', fontSize: '16px', color: '#666' }}><strong>Address:</strong> 123 Street, City, Country</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ProfileDisplay;
