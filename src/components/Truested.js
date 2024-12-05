import React from 'react'
import styled from 'styled-components'

const Truested = () => {
  return (
    <TruestedContainer className='brand-section'>
      <div className='container'>
        <h3>Truested By 1000+ Companies</h3>
        <div className='brand-section-slider'>
          <div className='slide'>
            <img src='https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png' alt='trusted-brands' />
          </div>

          <div className='slide'>
            <img src='https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png' alt='trusted-brands' />
          </div>

          <div className='slide'>
            <img src='https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png' alt='trusted-brands' />
          </div>


          <div className='slide'>
            <img src='https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png' alt='trusted-brands' />
          </div>

          <div className='slide'>
            <img src='https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png' alt='trusted-brands' />
          </div>
        </div>

      </div>

    </TruestedContainer>
  )
}

const TruestedContainer = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 12rem 0 0 0;
  }

  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 3rem;
  }

  .brand-section-slider {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap; /* Ensures better wrapping in smaller screens */
  }

  .slide img {
    min-width: 8rem;
    height: auto;
    max-height: 8rem;
    transition: transform 0.3s ease;
  }

  .slide img:hover {
    transform: scale(1.1);
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    h3 {
      font-size: 2rem;
    }

    .brand-section-slider {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }

    .slide img {
      max-width: 100%;
      height: auto;
    }
  }
`;


export default Truested