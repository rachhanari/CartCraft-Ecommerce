import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import ErrorPage from "./ErrorPage";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { FilterContextProvider } from "./context/Filter_Context";



const App = () => {
  const theme = {
    colors: {
      bg: "#f8f9fa",
      black: "#000",
      white: "#fff",
      helper: "#ff6347",
      btn: "rgba(98 84 243)",
      heading: "#333",
      text: "rgba(29, 29, 29, .8)",
      footer_bg: "#0a1435",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient: "liner-gradient(0deg, rgb(132 144 255) 0% rgb(98 189 252) 100%)",
      shadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
      shadowSupport: "rgba(0, 0, 0, 0.16) 0px 1px 4px",

    },

    media: {
      mobile: "768px",
      tab: "998px",
    }

  };


  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Header />
       <FilterContextProvider>
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
       </FilterContextProvider>
        <Footer />
      </Router>
    </ThemeProvider>

  );
};

export default App;