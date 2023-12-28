import React from 'react';
import './ContentBox.css';

const ContentBox = () => {
  return (
    <div className="content-box">
      <h1 className="content-heading">Working with you for a better financial future</h1>
      <p className="content-text">Dhillon Accounting CPA is a full-service accounting firm dedicated to maximizing your financial benefits for both Personal and Business Taxes.</p>
      <p className="offer">FOR FREE CONSULTATION</p>
      <a href="https://calendly.com/hdhillon-cpa" target="_blank" rel="noopener noreferrer" className="start-button-link">
        <button className="start-button">Book Appointment</button>
      </a>
    </div>
  );
};

export default ContentBox;
