import React from "react";
import styled from "styled-components";
import FormatPrice from "../Helpers/FormatPrice";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";

const ListView = ({ products = [] }) => {
  return (
    <Wrapper className="section">
      <div className="container grid">
        {products.map((curEle) => {
          const { id, name, image, price, description } = curEle;
          return (
            <div className="card grid grid-two-column" key={id}>
              <figure>
                <img src={image} alt={name} />
              </figure>

              <div className="card-data">
                <h3>{name}</h3>
                <p>
                  <FormatPrice price={price} />
                </p>

                <p>{description.slice(0, 80)}....</p>

                {/* Correcting the structure of the NavLink */}
                <NavLink to={`/singleproduct/${id}`} style={{ textDecoration: 'none' }}>
                  <Button className="btn">Read More</Button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 120rem;
  }

  .card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    .card-data {
      flex-grow: 1;
      padding: 1rem;

      h3 {
        color: ${({ theme }) => theme.colors.text};
        text-transform: capitalize;
      }

      p {
        color: ${({ theme }) => theme.colors.helper};
        margin: 0.5rem 0;
      }
    }

    figure {
      width: 150px;
      height: 150px;
      margin: 0;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 0.5rem;
      }
    }

    .btn {
      margin-top: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem 1.5rem;
      background-color: ${({ theme }) => theme.colors.primary};
      color: #fff;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;

      &:hover {
        background-color: ${({ theme }) => theme.colors.primaryHover};
      }
    }
  }
`;

export default ListView;
