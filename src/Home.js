import React from 'react';
import styled from 'styled-components';
import HeroSection from './components/HeroSection';
import Services from "./components/Services"
import Truested from "./components/Truested"
const Home = () => {

  const data = {
    name: "Rachha's Store"
  }
  return (
    <>
  <HeroSection myData={data}/> 
  <Services/>
  <Truested />
  </>
  );
};

const Content = styled.section`
  background-color: ${({ theme }) => theme.colors.bg};
  width: 200px;
  height: 200px;
`;

export default Home;
