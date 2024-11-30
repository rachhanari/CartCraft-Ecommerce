import React from 'react'
import styled from 'styled-components';
import Button from "../styles/Button"
import { NavLink } from 'react-router-dom';


const HeroSection = ({myData}) => {

const {name} = myData;
    return (
        <Store>
            <div className='container'>
                <section className='grid grid-two-column'>
                    <aside className='hero-section-data'>
                        <p className='intro-data'>Wellcome to </p>
                        <h1>{name}</h1>
                        <p>
                            Explore a wide range of fashion, electronics, and home essentials. Add items to your cart, view detailed product information, and enjoy a hassle-free shopping experience.
                        </p>
                        <NavLink to={"/products"}>
                            <Button>Shop Now</Button>
                        </NavLink>
                    </aside>
                    <div className='hero-section-image'>
                        <figure>
                            <img src='images/hero.jpg'alt='hero-section-photo' className='img-style' />
                        </figure>
                    </div>
                </section>
            </div>
        </Store>
    )
}

const Store = styled.section`
  img {
    padding: 50px
    width:20px
  }

  .hero-section-data {
    p {
    
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize; 
      font-size: 50px;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex; 
    justify-content: center;
    align-items: center;
  }

  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top:rem;
      z-index: -1;
    }
  }

  .img-style {
  padding:50px;
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 30px;
    }

    figure::after {
      content: "";
      width: 50%;
      
      height: 100%;
      left: 0;
      top: 10%;
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;


export default HeroSection