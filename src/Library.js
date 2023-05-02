import React, { useState } from 'react';
import Modal from 'react-modal';
import {useNavigate } from 'react-router-dom';
import './Hall.css'

const Library = () => {
  const [inputWord, setInputWord] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const correctWord = 'keyboard';
  const navigate = useNavigate();

  const checkWord = () => {
    const isInputCorrect = inputWord.toLowerCase() === correctWord.toLowerCase();
    setIsCorrect(isInputCorrect);
    setShowModal(isInputCorrect);
  };

  const handleNextPlace = () => {
    setShowModal(false);
    navigate('/computerroom')
  };
  const handleGoLeft = () => {
    setShowModal(false);
    navigate('/dead-end2')
  };
  const handleClue1=()=>{
    alert("Look the book and solve the riddle")
  }
  const handleClue2=()=>{
    alert("It something the a computer user must have.")
  }
  return (
    <div className="hall-container">
      <h1>The Library</h1>
      <img src="https://i.postimg.cc/65QcfX3x/Riddle.jpg" alt="Library" />
      <input
        className="inp"
        type="text"
        value={inputWord}
        placeholder="Enter your answer here"
        onChange={(e) => setInputWord(e.target.value)}
      />
      <button className="start-button" onClick={checkWord}>
        Check
      </button>
      <div className='butcon'>
        <button className='but' onClick={handleClue1}>Clue1</button>
        <button className='but' onClick={handleClue2}>Clue2</button>
      </div>
      
      {isCorrect !== null && (
        <p>
          {isCorrect ? (
            <Modal
              isOpen={showModal}
              onRequestClose={() => setShowModal(false)}
              contentLabel="Modal"
              className="modal"
              overlayClassName="modal-overlay"
            >
              <div className="modal-content">
                <p>Correct answer!
                  You hear two large book shelfs moving then Ta-da! Two new paths appeared infront of you.
                </p>
                <div className='button-container'>
                <button className="start-button" onClick={handleNextPlace}>Go right</button>
                <button className="start-button" onClick={handleGoLeft}>Go Left</button>
                </div>
              </div>
            </Modal>
          ) : (
            'Incorrect word!'
          )}
        </p>
      )}
    </div>
  );
};

export default Library;
