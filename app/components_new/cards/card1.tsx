"use client";

import React from "react";
import styled from "styled-components";
import Image from "next/image";

// Card component - Interactive profile card with flip animation
const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        {/* Profile image that disappears on hover */}
        <Image 
          src="/Hu.jpg" 
          alt="Profile" 
          className="card__image"
          width={300}
          height={400}
          style={{ objectFit: 'cover' }}
        />
        {/* Card content that appears on hover with 3D rotation */}
        <div className="card__content">
          <p className="card__title">About Me</p>
          <p className="card__description">
            I am a passionate web developer with a love for creating dynamic and engaging user experiences. My journey in web development has been fueled by a desire to build innovative solutions that make a difference.
          </p>
        </div>
      </div>
    </StyledWrapper>
  );
};

// Styled component for the card wrapper
const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 300px;
    height: 400px;
    margin: 20px;
    perspective: 1000px;
    transform-style: preserve-3d;
    transition: transform 0.8s;
  }

  .card:hover {
    transform: rotateY(180deg);
  }

  .card__image,
  .card__content {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 15px;
    overflow: hidden;
  }

  .card__image {
    object-fit: cover;
  }

  .card__content {
    background: linear-gradient(to right, #858d71 5%, #0b2c3d 90%);
    transform: rotateY(180deg);
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
  }

  .card__title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 15px;
  }

  .card__description {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export default Card; 