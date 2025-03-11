import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../src/App.css'
import '../src/responsive.css'
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add other routes like /products, /cart, /login here */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
