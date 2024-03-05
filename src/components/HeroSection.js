
import React from 'react';
import '../HeroSection.css';
import heroImage from '../assets/img/me.JPG';

export const HeroSection = () => {


    // CV file
    const cvFile = '../assets/Cv-victor.pdf';

    // WhatsApp message details
  const phoneNumber = '07752117594';
  const message = encodeURIComponent('Hello, I would like to hire you!'); // 


  //Fix the path to the image ✅❌
    return (
      <div className="hero-container">
        <div className="hero-content">
          <img src={heroImage} alt="Hero" className="hero-image" />
          <div className="hero-text">
            <h1>Victor Marques Rina</h1>
            <p>Front End Developer</p>
            <div className="hero-buttons">
        <a href={cvFile} download="Cv-victor.pdf" className="btn btn-primary">Download CV</a>
        <a href={`https://wa.me/${phoneNumber}?text=${message}`} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">WhatsApp</a>
      </div>
          </div>
        </div>
      </div>
    );
  };

