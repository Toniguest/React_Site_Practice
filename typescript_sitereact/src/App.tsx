import React from "react";
import { Routes, Route } from 'react-router-dom';

import NavBar from './components/Navbar';
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};
export default App;