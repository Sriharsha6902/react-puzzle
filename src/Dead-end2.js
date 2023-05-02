import React from 'react';
import './Hunt.css';
import { useNavigate } from 'react-router-dom';

const DE = () => {
  const navigate = useNavigate();
  const handleTryAgain = () => {
    navigate('/');
  };
  return (
    <div className="hunt-container">
      <h1>Oh no! You have reached a deadend and got caught by the ghost</h1>
      <img src="https://static.india.com/wp-content/uploads/2015/09/Horror.jpg?impolicy=Medium_Resize&w=1200&h=800" alt="Ghost" />
      <button className='start-button' onClick={handleTryAgain}>Try again</button>
    </div>
  );
};

export default DE;
