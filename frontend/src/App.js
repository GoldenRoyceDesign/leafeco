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
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/cart";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Notifications from "./components/Notifications";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
