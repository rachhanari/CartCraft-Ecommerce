import HeroSection from './components/HeroSection'
import { useProductContext } from './context/Productcontext';

const About = () => {

  const {myName} = useProductContext();

  const data ={
    name: "Rachha's Ecommerce",
  };
  return (
    <>
    {myName}
    <HeroSection myData= {data}/>
    </>
  )
}



export default About