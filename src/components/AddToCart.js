import React, { useState } from 'react';
import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';
import CartAmountToggle from './CartAmountToggle';
import { NavLink } from 'react-router-dom';
import Button from "../styles/Button";
import { useCartContext } from '../context/cart_context';

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext(); // Corrected method name
  const { id, colors, stock } = product;
  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    setAmount((prevAmount) => Math.max(prevAmount - 1, 1));
  };

  const setIncrease = () => {
    setAmount((prevAmount) => Math.min(prevAmount + 1, stock));
  };

  return (
    <Wrapper>
      <div className="colors">
        <p>
          Colors:
          {colors.map((curColor, index) => (
            <button
              key={index}
              style={{ backgroundColor: curColor }}
              className={`btnStyle ${color === curColor ? "active" : ""}`}
              onClick={() => setColor(curColor)}
            >
              {color === curColor && <FaCheck className="checkStyle" />}
            </button>
          ))}
        </p>
      </div>

      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      <NavLink
        to="/cart"
        onClick={() => addToCart(id, color, amount, product)} // Corrected method usage
      >
        <Button className="btn">Add to Cart</Button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .colors p {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    font-weight: bold;
  }

  .btnStyle {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin-left: 0.5rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.2s ease, opacity 0.2s ease;

    &:hover {
      opacity: 0.8;
      transform: scale(1.1);
    }
  }

  .btnStyle.active {
    opacity: 1;
    border: 2px solid #000;
    transform: scale(1.2);
  }

  .checkStyle {
    color: #fff;
    font-size: 0.8rem;
  }

  .cart-button {
    margin-top: 2rem;

    .amount-toggle {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      button {
        border: none;
        background: #f4f4f4;
        padding: 0.5rem;
        border-radius: 5px;
        font-size: 1rem;
        cursor: pointer;
        transition: background 0.3s ease;

        &:hover {
          background: #ececec;
        }

        svg {
          font-size: 1rem;
        }
      }

      .amount-style {
        font-size: 1.5rem;
        font-weight: bold;
        color: ${({ theme }) => theme.colors.primary || "#333"};
        text-align: center;
        width: 2rem;
      }
    }
  }

  a {
    text-decoration: none;
  }

  .btn {
    display: inline-block;
    margin-top: 1.5rem;
    padding: 1.2rem 2.5rem;
    background-color: ${({ theme }) => theme.colors.primary || "#6200ea"};
    color: #fff;
    font-size: 1.2rem;
    font-weight: 700;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.hover || "#5300c7"};
    }
  }
`;

export default AddToCart;
