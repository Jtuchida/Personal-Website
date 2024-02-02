import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={`/videos/black_-_13495 (Original)`} autoPlay loop muted />
      <div className="screen-hero-section">
        <div className="text-wrapper">
          <div className="text-wrap">
            <div className="heading-wrapper">
              <h1 className="heading">Welcome to my Website!</h1>
            </div>
            <div className="paragraph">
              Hello there! My name is Joseph Uchida. I am Senior at Liberty University, majoring in Computer Science
              with a focus in Cybersecurity, and this a little project I've been working.
              Come check out what I've been building! 
              The idea behind this project is to
              learn how to create new things and then go and do it!
              Plus, the objective of this website is to give some background on myself and what I'm about!
              Sorry, it's still a work in progress, but we're getting there day by day!
            </div>
          </div>
          <div className="button-wrap">
            <button className="cta-button">
              <b className="cta-text">Get Started</b>
            </button>
          </div>
        </div>
        <div className="map-wrapper">
          <div className="image-description"></div>
        </div>
      </div>

    </div>

  );
}

export default HeroSection;