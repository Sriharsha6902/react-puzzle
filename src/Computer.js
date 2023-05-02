import './Hall.css';
import React, { useState } from 'react';
import Modal from 'react-modal';
import {useNavigate } from 'react-router-dom';


const CR = () => {
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
        navigate('/exit')
      };
  const handleClue1=()=>{
    alert("You already know the password")
  }
  const handleClue2=()=>{
    alert("What did you get from solving the riddle?")
  }
    return (
      <div className="hall-container">
        <h1>The Computer Room</h1>
        <p>You enter a room and see a old dusty computer which is turned on and noticed that it is missing some thing you just solved. It may also contain some important secrets</p>
        <img src="https://pbs.twimg.com/media/Fl86_REXgAAY8iB.jpg" alt="Library" />
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
                  <p>Correct password! You opened the computer and find a map of the mansion and its hidden exit and follow along it.</p>
                  <button onClick={handleNextPlace}>Next</button>
                </div>
              </Modal>
            ) : ('Incorrect password!')}
          </p>
        )}
      </div>
    );
};

export default CR;
