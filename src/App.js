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


const App = () => {
  const theme = {
    colors: {
      bg: "#f8f9fa",
      black: "#000",
      white: "#fff",
      helper: "#ff6347",
      btn: "#6200ea",
      heading: "#333",
    },

    media:{
      mobile: "768px",
      tab: "998px",
    }
    
  };
  

  return (
    <ThemeProvider theme={theme}>
  <Router>
    <GlobalStyle />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/singleproduct/:id" element={<SingleProduct />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </Router>
</ThemeProvider>

  );
};

export default App;