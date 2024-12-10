import React from "react";
import styled from "styled-components";
import Button from "../styles/Button";
import { NavLink } from "react-router-dom";

const HeroSection = ({ myData }) => {
  const { name } = myData;

  return (
    <Wrapper>
      <div className="container">
        <section className="grid grid-two-column">
          <aside className="hero-section-data">
            <p className="intro-data">Welcome to</p>
            <h1>{name}</h1>
            <p>
              Explore a wide range of fashion, electronics, and home essentials.
              Add items to your cart, view detailed product information, and
              enjoy a hassle-free shopping experience.
            </p>
            <NavLink to="/products">
              <Button>Shop Now</Button>
            </NavLink>
          </aside>
          <div className="hero-section-image">
            <figure>
              <img
                src="images/hero.jpg"
                alt="hero-section-photo"
                className="img-style"
              />
            </figure>
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 2rem 0;
  img {
    padding: 10px;
    width: 100%;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-size: 3rem;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 30px;
    }
  }
`;

export default HeroSection;
