import React, { useState } from "react";
import Hero from "../components/Hero";
import shipping from '../assets/home/FreeShipping.png'
import returns from '../assets/home/Returns.png'
import support from '../assets/home/OnlineSupport.png';
import payment from '../assets/home/FlexiblePayment.png';
import collection from '../assets/home/collection.png'
import plates from '../assets/home/plates.png'
import sugarcane_plate from '../assets/home/sugarcane_plate.png'
import sugarcane from '../assets/home/sugarcane.png'
import sugarcane_right from '../assets/home/sugarcane-right.png'
import shippingIcon from '../assets/home/shipping-icon.png'
import customercare from '../assets/home/customercare.png'
import moneyback from '../assets/home/moneyback.png'
import { Container, Row, Col, Button } from "react-bootstrap";
import client from '../assets/home/client.png'
import testimonial from '../assets/home/testimonial_hr.png'
import BlogSection from "../components/blogs";

const testimonials = [
    {
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
        name: "LOREM IPSUM",
        email: "loremipsum@gmail.com",
        image: client,
    },
    {
        text: "Another testimonial text goes here. This is just for demonstration purposes.",
        name: "JOHN DOE",
        email: "johndoe@example.com",
        image: client,
    },
];


const HomePage = () => {

    const [index, setIndex] = useState(0);

    const handlePrev = () => {
        setIndex(index === 0 ? testimonials.length - 1 : index - 1);
    };

    const handleNext = () => {
        setIndex(index === testimonials.length - 1 ? 0 : index + 1);
    };


    return (
        <>
            <Hero />
            <section className="container home p-5">
                <h2 className="fw-bold">
                    100% Authentic Product
                </h2>
                <p className="mb-5">The unmatched duo is everything you’ll need to startof thenew year right</p>
                <div className="row">
                    <div className="col-md-3 text-center">
                        <img src={shipping} alt="shipping" className="img-fluid mb-4" />
                        <p className="fw-bold">Free Shipping</p>
                        <p style={{ color: '#424040' }}>Free Shipping for orders over $120</p>
                    </div>
                    <div className="col-md-3 text-center">
                        <img src={returns} alt="returns" className="img-fluid mb-4" />
                        <p className="fw-bold">Returns</p>
                        <p style={{ color: '#424040' }}>Within 30 days for an exchange</p>
                    </div>
                    <div className="col-md-3 text-center">
                        <img src={support} alt="support" className="img-fluid mb-4" />
                        <p className="fw-bold">Online Support</p>
                        <p style={{ color: '#424040' }}>24 hours a day 7 days a week</p>
                    </div>
                    <div className="col-md-3 text-center">
                        <img src={payment} alt="payment" className="img-fluid mb-4" />
                        <p className="fw-bold">Flexible Payment</p>
                        <p style={{ color: '#424040' }}>Pay with multiple credit cards</p>
                    </div>
                </div>
            </section>

            <section className="collection">
                <div className="row">
                    <div className="col-md-4">
                        <img src={collection} alt="collection-section-image" className="img-fluid h-100" />
                    </div>
                    <div className="col-md-8 right-part d-flex flex-column justify-content-center text-center">
                        <div className="w-50 d-flex flex-column justify-content-center align-items-center text-center gap-4">
                            <p className="fs-6 best">BEST OF COLLECTION 2025</p>
                            <h2 className="fw-bold">Discover a Best of the Best
                                world of Products</h2>
                            <p className="fs-6">We offer biodegradable, compostable areca leaf plates and a
                                curated selection of home essentials made from natural materials.</p>
                            <button className="btn">KNOW MORE</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="plates-section">
                <div className="row">
                    <div className="col-md-7">
                        <img src={plates} alt="Sugarcane-image" className="img-fluid" />
                    </div>
                    <div className="col-md-5 right d-flex flex-column justify-content-center align-items-center p-4">
                        <div className="d-flex flex-column justify-content-center gap-3">
                            <p className="party">NYE PARTY PACK</p>
                            <h2 className="fw-bold">Paperless Sugarcane
                                Products</h2>
                            <p>The unmatched duo is everything you’ll need to
                                start of the new year right</p>
                            <button className="btn">SHOP NOW</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sugarcane">
                <div className="row">
                    <div className="col-md-5 left">
                        <img src={sugarcane_plate} alt="leafeco-image" className="img-fluid w-50" />
                        <button className="btn">SHOP NOW</button>
                        <img src={sugarcane} alt="leafeco-image" className="img-fluid w-75" />
                    </div>
                    <div className="col-md-7">
                        <img src={sugarcane_right} alt="leafeco-image" className="img-fluid" />
                    </div>
                </div>
            </section>

            <section className="shipping-delivery p-3 mt-3 mb-3">
                <div className="row">
                    <div className="col-md-4 d-flex justify-content-center align-items-center gap-3">
                        <div>
                            <img src={shippingIcon} alt="shipping-image" className="img-fluid" />
                        </div>
                        <div>
                            <p style={{ color: '#107252' }}>FREE  SHIPPING WORLDWIDE</p>
                            <p style={{ color: '#A4A4A4' }}>On order over 1159 - 7 days a week</p>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center align-items-center gap-3">
                        <div>
                            <img src={customercare} alt="shipping-image" className="img-fluid" />
                        </div>
                        <div>
                            <p style={{ color: '#107252' }}>24/7 CUSTOMER SERVICE</p>
                            <p style={{ color: '#A4A4A4' }}>Call us at 876 2235 000 00</p>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center align-items-center gap-3">
                        <div>
                            <img src={moneyback} alt="shipping-image" className="img-fluid" />
                        </div>
                        <div>
                            <p style={{ color: '#107252' }}>MONEY BACK GUARANTEE</p>
                            <p style={{ color: '#A4A4A4' }}>Send within 30 days</p>
                        </div>
                    </div>
                </div>
            </section>

            <Container fluid className="text-white py-5 position-relative testimonial" style={{ background: '#107252' }}>

                <Row className="justify-content-center text-center">
                    <Col md={8}>
                        <h2 className="fw-bold mb-4">What people say</h2>
                        <div className="mb-4">
                            <img src={testimonial} alt="testimonial-image" className="img-fluid w-50" />
                        </div>
                        <p className="px-3 fs-5">{testimonials[index].text}</p>
                        <img
                            src={testimonials[index].image}
                            alt={testimonials[index].name}
                            className="rounded-circle mb-2"
                        />
                        <h5 className="fw-bold">{testimonials[index].name}</h5>
                        <p>{testimonials[index].email}</p>
                    </Col>
                </Row>
                {/* Buttons - Centered */}
                <Button
                    variant="light"
                    className="position-absolute top-50 start-0 translate-middle-y px-5 py-2 next-pre-btn"
                    onClick={handlePrev}
                    style={{ fontSize: "1rem", background: "transparent", color: "white", border: "none" }}
                >
                    ← PRE
                </Button>

                <Button
                    variant="light"
                    className="position-absolute top-50 end-0 translate-middle-y px-5 py-2 next-pre-btn"
                    onClick={handleNext}
                    style={{ fontSize: "1rem", background: "transparent", color: "white", border: "none" }}
                >
                    NEXT →
                </Button>

            </Container>


            <section>
                <BlogSection />
            </section>

        </>
    );
};

export default HomePage;
