import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import contact1 from '../assets/contact/contact-img1.png';
import contact2 from '../assets/contact/contact-img2.png';
import contact3 from '../assets/contact/contact-img3.png';
import contact4 from '../assets/contact/contact-img4.png';
import contact5 from '../assets/contact/contact-img5.png';
import contacticon1 from '../assets/contact/contact-icon-1.png'
import contacticon2 from '../assets/contact/contact-icon-2.png'
import contacticon3 from '../assets/contact/contact-icon-3.png'

const ContactPage = () => {
    return (
        <>
            {/* Contact Section */}
            <Container className="mt-5 mb-4 contact">
                <Row className="align-items-center">
                    <Col md={6} className="pe-4 ps-4 mb-4">
                        <h1>Get in Touch For Enquiries & Offers</h1>
                        <p>
                            Have questions or looking for the best deals? Get in touch with us
                            today!
                        </p>
                        <Form>
                            <Form.Group className="mb-4">
                                <Form.Control type="text" placeholder="Name" className="p-3" />
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <Form.Control type="email" placeholder="Email" className="p-3" />
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <Form.Control as="textarea" rows={3} placeholder="Comment" className="p-3" />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="btn">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col md={6} className="d-flex justify-content-center pe-4 ps-4">
                        <div className="bg-light" style={{ width: "100%", height: "450px" }}></div>
                    </Col>
                </Row>
            </Container>

            {/* Contact Info Section */}
            <Container fluid className="text-center py-4" style={{ backgroundColor: "#fdeee5" }}>
                <Row className="justify-content-center">
                    <Col md={3} className="text-center">
                        <div className="d-flex flex-column align-items-center">
                            <img src={contacticon1} alt="contact-image" className="imf-fluid w-25" />
                            <h5 className="mt-2">Visit our Office Branch</h5>
                            <p>www.leafeco.com</p>
                        </div>
                    </Col>
                    <Col md={3} className="text-center">
                        <div className="d-flex flex-column align-items-center">
                            <img src={contacticon2} alt="contact-image" className="imf-fluid w-25" />
                            <h5 className="mt-2">Visit Us</h5>
                            <p>www.leafeco.com</p>
                        </div>
                    </Col>
                    <Col md={3} className="text-center">
                        <div className="d-flex flex-column align-items-center">
                            <img src={contacticon3} alt="contact-image" className="imf-fluid w-25" />
                            <h5 className="mt-2">Call Us</h5>
                            <p>+98 445 9768 89</p>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* Map Section */}
            <section className="my-4">
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345086167!2d144.95592831584406!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f2b1d3af%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1613952199729!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </section>

            {/* Product Gallery */}
            <section className="gallery my-5">
                <Row className="d-flex justify-content-center align-items-center">
                    <Col md={2} className="d-flex justify-content-center align-items-center mb-4">
                        <img src={contact1} alt="contact-image" className="img-fluid" />
                    </Col>
                    <Col md={2} className="d-flex justify-content-center align-items-center mb-4">
                        <img src={contact2} alt="contact-image" className="img-fluid" />
                    </Col>
                    <Col md={2} className="d-flex justify-content-center align-items-center mb-4">
                        <img src={contact3} alt="contact-image" className="img-fluid" />
                    </Col>
                    <Col md={2} className="d-flex justify-content-center align-items-center mb-4">
                        <img src={contact4} alt="contact-image" className="img-fluid" />
                    </Col>
                    <Col md={2} className="d-flex justify-content-center align-items-center mb-4">
                        <img src={contact5} alt="contact-image" className="img-fluid" />
                    </Col>
                </Row>
            </section>
        </>
    );
};

export default ContactPage;
