import React from 'react';
import './Hunt.css';
import { Link } from 'react-router-dom';
const Hunt = () => {
  return (
    <div className="hunt-container">
      <h1>Welcome to "The Mysterious Mansion" puzzle!</h1>
      <img src="https://i.postimg.cc/P5MjWSDp/creepy-mansion.jpg" alt="Creepy Mansion" />
      <Link to={'/hall'}><button className='start-button'>Go in</button></Link>
    </div>
  );
};

export default Hunt;
