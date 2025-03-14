import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../src/App.css'
import '../src/responsive.css'
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import About from "./pages/About";
import ContactPage from "./pages/Contact";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
