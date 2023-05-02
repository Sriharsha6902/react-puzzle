import React from 'react';
import './Hunt.css';
import { useNavigate } from 'react-router-dom';
const Exit = () => {
  const navigate=useNavigate()
  const redHome=()=>{
    navigate('/')
  }
  return (
    <div className="hunt-container">
      <h1>Congratulations!! You have successfully escaped the mansion.</h1>
      <img src="https://i0.wp.com/roomescapeartist.com/wp-content/uploads/2016/07/claustrophobia-the-dungeon.jpg?fit=894%2C1224&ssl=1" alt="exit" />
      <button className='start-button' onClick={redHome}>Home</button>
    </div>
  );
};

export default Exit;
