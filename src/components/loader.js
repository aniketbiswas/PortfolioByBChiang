import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import anime from 'animejs';
import styled from 'styled-components';
import pixelDuckGif from '../images/pixel-duck.gif';

const StyledLoader = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--dark-navy);
  z-index: 99;

  .loader-wrapper {
    width: max-content;
    max-width: 150px;
    transition: var(--transition);
    opacity: ${props => (props.isMounted ? 1 : 0)};
    
    img {
      display: block;
      width: 100%;
      height: auto;
      margin: 0 auto;
      user-select: none;
      animation: pulse 1.2s ease-in-out infinite alternate;
    }
  }
  
  @keyframes pulse {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.1);
    }
  }
`;

const Loader = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);

  const animate = () => {
    // Set a timer to hide the loader after a delay
    setTimeout(() => {
      const loader = anime.timeline({
        complete: () => finishLoading(),
      });

      loader
        .add({
          targets: '.loader-gif',
          delay: 0,
          duration: 500,
          easing: 'easeInOutQuart',
          opacity: 0,
          scale: 0.8,
        })
        .add({
          targets: '.loader',
          duration: 200,
          easing: 'easeInOutQuart',
          opacity: 0,
          zIndex: -1,
        });
    }, 2000); // Show the duck for 2 seconds before fading
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <StyledLoader className="loader" isMounted={isMounted}>
      <Helmet bodyAttributes={{ class: `hidden` }} />

      <div className="loader-wrapper">
        <img
          src={pixelDuckGif}
          alt="Loading Animation"
          className="loader-gif"
        />
      </div>
    </StyledLoader>
  );
};

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
};

export default Loader;
