import React, { useState } from 'react';
import './Hall.css';
import { Link, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';

const Hall = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const handleGoRight = () => {
    setShowModal(true);
  };

  const handleTryAgain = () => {
    setShowModal(false);
    navigate('/');
  };
  const handleClue1=()=>{
    alert("Look the direction the man is pointing")
  }
  const handleClue2=()=>{
    alert("Look at the bottom right of the image")
  }
  const handleClue3=()=>{
    alert("It looks the language mostly seen in ANIME")
  }
  return (
    <div className="hall-container">
      <h1>The Hall</h1>
      <p>Look at the picture and find the hidden message</p>
      <img src="https://i.postimg.cc/y8P0M3tg/L6-Zha-Flqv-DMt.jpg" alt="Hall" />
      <div className="button-container">
        <Link to="/library">
          <button className="start-button">Go left</button>
        </Link>
        <button className='start-button' onClick={handleGoRight}>Go right</button>
      </div>
      <div className='butcon'>
         <button className='but' onClick={handleClue1}>Clue1</button>
        <button className='but' onClick={handleClue2}>Clue2</button>
        <button className='but' onClick={handleClue3}>Clue3</button>
      </div>
       
      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        contentLabel="Modal"
        className="modal"
        overlayClassName="modal-overlay"
        shouldCloseOnOverlayClick={false}
      >
        <div className="modal-content">
          <p>You reached a dead-end.</p>
          <button onClick={handleTryAgain}>Try again</button>
        </div>
      </Modal>
    </div>
  );
};

export default Hall;
