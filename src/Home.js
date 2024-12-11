import styled from 'styled-components';
import HeroSection from './components/HeroSection';
import Services from "./components/Services"
import Truested from "./components/Truested"
import FeaturesProducts from './components/FeaturesProducts';
const Home = () => {

  const data = {
    name: "TrendCart Store"
  }
  return (
    <>
  <HeroSection myData={data}/> 
  <FeaturesProducts />
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
