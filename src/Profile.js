import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';
import './profile.css'
import { Link } from 'react-router-dom';
const Dashboard = () => {

  return (
    <div className="dashboard-container">
      <h1 className="welcome-text">Welcome to the HUNT!</h1><br/>
      <Link to={'/hunt'}> <button className='start-button'>Start the Hunt</button></Link>
      {/* Add your dashboard components and content here */}
      <button className='signout' onClick={() => signOut(auth)}>Sign Out</button>
    </div>
  );
};

export default Dashboard;
