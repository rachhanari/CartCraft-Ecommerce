import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FiShoppingCart } from 'react-icons/fi';
import { CgMenu, CgClose } from 'react-icons/cg';


const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bg || '#f8f9fa'};
  padding: 1rem 2rem;

  .nav-lists {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 2rem;
  }

  .nav-link {
    text-decoration: none;
    font-size: 1.6rem;
    font-weight: 500;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.black || '#000'};
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.helper || '#ff6347'};
    }
  }

  .cart-icon--link {
    position: relative;

    .cart-icon {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.black || '#000'};

      &:hover {
        color: ${({ theme }) => theme.colors.helper || '#ff6347'};
      }
    }

    .cart-total-item {
      position: absolute;
      top: -10px;
      right: -10px;
      width: 1.6rem;
      height: 1.6rem;
      background-color: ${({ theme }) => theme.colors.helper || '#ff6347'};
      color: ${({ theme }) => theme.colors.white || '#fff'};
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      font-weight: bold;
    }
  }

  .mobile-navbar-btn {
    display: none;
    .mobile-nav-icon {
      font-size: 2.4rem;
      cursor: pointer;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .mobile-navbar-btn {
      display: inline-block;
    }
    .nav-lists {
      display: none;
    }
  }
`;

const Navbar = () => {


  return (
    <NavbarContainer>
      <ul className="nav-lists">
        <li>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className="nav-link">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className="nav-link cart-icon--link">
            <FiShoppingCart className="cart-icon" />
            <span className="cart-total-item"></span>
          </NavLink>
        </li>
      </ul>
      <div className="mobile-navbar-btn">
        <CgMenu className="mobile-nav-icon" />
        <CgClose className="mobile-nav-icon close-outline" />
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
