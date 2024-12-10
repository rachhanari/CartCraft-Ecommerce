import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import Navbar from "./Navbar"
const Header = () => {
  return (
    <MainHeader>
        <NavLink to="/">
           <img src='./images/logo.png' alt='my logo' />
        </NavLink>
        <Navbar/>
    </MainHeader>
  )
}
const MainHeader= styled.header`
padding: 0 4.8rem;
background-color: ${({ theme }) => theme.colors.bg};
display: flex;
justify-content: space-between;
align-item: center;
position: relative; 


img{

object-fit: contain;
width: 200px;
padding: 15px
}
`;


export default Header