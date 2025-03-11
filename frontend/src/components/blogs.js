import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import news1 from '../assets/home/news1.png'
import news2 from '../assets/home/news2.png'
import news3 from '../assets/home/news3.png'

const blogs = [
    {
        id: 1,
        title: "Lorem",
        image: news1, // Replace with actual image URL
        author: "Alison Parker",
        date: "22 January 2025",
        description: "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,",
    },
    {
        id: 2,
        title: "Lorem",
        image: news2,
        author: "Alison Parker",
        date: "22 January 2025",
        description: "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,",
    },
    {
        id: 3,
        title: "Lorem",
        image: news3,
        author: "Alison Parker",
        date: "22 January 2025",
        description: "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,",
    },
];

export default function BlogSection() {
    return (
        <Container className="my-5">
            {/* Heading */}
            <div className="text-center mb-5">
                <p className="text-uppercase text-muted" style={{letterSpacing: '10px'}}>Blogs LeafEco</p>
                <h2 className="fw-bold">Our Latest News & Blogs</h2>
            </div>

            {/* Blog Cards */}
            <Row className="gy-4">
                {blogs.map((blog) => (
                    <Col key={blog.id} md={4}>
                        <Card className="shadow-sm border-0">
                            <Card.Img variant="top" src={blog.image} className="rounded" />
                            <div
                                className="position-absolute px-3 py-1 text-white"
                                style={{
                                    background: "#0A5D3D",
                                    bottom: "200px",
                                }}
                            >
                                {blog.title}
                            </div>
                            <Card.Body>
                                <div className="d-flex justify-content-between">
                                    <p className="text-muted m-0">
                                        {blog.author}
                                    </p>
                                    <p className="text-muted"><span className="mx-1" style={{color: '#B75417'}}>•</span> {blog.date}</p>
                                </div>
                                <p className="text-dark">{blog.description}</p>
                                <a href="#" className="fw-bold" style={{color: '#B75417'}}>
                                    Read More
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
