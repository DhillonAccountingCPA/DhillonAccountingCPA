import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <p> 
        <i className="fa fa-copyright" aria-hidden="true"></i> {year} Dhillon Accounting CPA Inc. All Rights Reserved. Website built by Fossil Designs.
      </p>
    </footer>
  );
};

export default Footer;
