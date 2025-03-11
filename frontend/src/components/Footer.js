import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import footer_logo from '../assets/home/footer-logo.png'

export default function Footer() {
  return (
    <footer className="footer mt-5">
      <div className="text-white py-5" style={{background: '#006847'}}>
        <Container>
          <Row>
            {/* Left Section - Logo & Description */}
            <Col md={3} className="text-center text-md-start mb-3 mb-md-0">
              <img src={footer_logo} alt="footer_logo" className="img-fluid w-75 mb-3" />
              <p className="small mb-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              {/* Social Icons (Replace with actual icons if needed) */}
              <div className="d-flex justify-content-center justify-content-md-start gap-2">
                <div className="bg-white rounded-circle" style={{ width: "30px", height: "30px" }}></div>
                <div className="bg-white rounded-circle" style={{ width: "30px", height: "30px" }}></div>
                <div className="bg-white rounded-circle" style={{ width: "30px", height: "30px" }}></div>
              </div>
            </Col>

            {/* Middle Section - Links */}
            <Col md={2}>
              <h6 className="fw-bold mb-3">COMPANY</h6>
              <ul className="list-unstyled d-flex flex-column gap-2">
                <li><a href="#" className="text-white text-decoration-none">Home</a></li>
                <li><a href="#" className="text-white text-decoration-none">About</a></li>
                <li><a href="#" className="text-white text-decoration-none">Products</a></li>
                <li><a href="#" className="text-white text-decoration-none">Orders</a></li>
                <li><a href="#" className="text-white text-decoration-none">Contact Us</a></li>
              </ul>

            </Col>
            <Col md={3}>
              <h6 className="fw-bold mb-3">PRODUCTS</h6>
              <ul className="list-unstyled d-flex flex-column gap-2">
                <li><a href="#" className="text-white text-decoration-none">Plates</a></li>
                <li><a href="#" className="text-white text-decoration-none">Bowls & Trays</a></li>
                <li><a href="#" className="text-white text-decoration-none">Sugarcane Bagasse Plates & Bowls</a></li>
                <li><a href="#" className="text-white text-decoration-none">Bamboo Serving Platters & Cutlery</a></li>
                <li><a href="#" className="text-white text-decoration-none">Cornstarch Cups & Utensils</a></li>
              </ul>
            </Col>

            {/* Right Section - Contact Info */}
            <Col md={3}>
              <h6 className="fw-bold mb-3">CONTACT INFO</h6>
              <p className="small">
                105c, Periyapatti Kattu Kottayi,<br />
                Periyapatti Post Chemmandapatti,<br />
                Salem, Tamil Nadu - 636309
              </p>
              <p className="small fw-bold">Ph: +91 7358369084</p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Copyright Section */}
      <div className="text-center py-2" style={{ background: '#B75417' }}>
        <p className="m-0 text-light small fw-bold">
          Copyright © 2025 Leafeco. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
