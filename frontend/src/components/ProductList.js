import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col, Spinner, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://leafeco.onrender.com/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Handle category selection
  const handleCategoryChange = (category) => {
    setSelectedCategory(category === selectedCategory ? "" : category);
  };

  // Filter products based on category
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <Container fluid className="mt-4">
      <Row>
        {/* Sidebar Filters */}
        <Col md={3} className="border-end p-3">
          <h5>FILTERS</h5>
          <h6 className="mt-3">CATEGORIES</h6>
          <Form>
            <Form.Check
              type="radio"
              label="Show All"
              name="category"
              checked={selectedCategory === ""}
              onChange={() => handleCategoryChange("")}
            />
            {["Table ware", "Kitchen Ware", "Drink Ware", "Personal Care"].map(
              (category) => (
                <Form.Check
                  key={category}
                  type="radio"
                  label={category}
                  name="category"
                  value={category}
                  checked={selectedCategory === category}
                  onChange={() => handleCategoryChange(category)}
                />
              )
            )}
          </Form>
        </Col>

        {/* Product Grid */}
        <Col md={9}>
          <h2 className="mb-3">
            {selectedCategory ? `${selectedCategory} Products` : "Our Products"}
          </h2>
          {loading ? (
            <Spinner animation="border" />
          ) : filteredProducts.length === 0 ? (
            <p>No products found for this category.</p>
          ) : (
            <Row>
              {filteredProducts.map((product) => (
                <Col md={3} key={product._id} className="mb-4">
                  <Card
                    className="shadow-sm border-0"
                    onClick={() => navigate(`/product/${product._id}`)}
                    style={{ cursor: "pointer" }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "180px",
                        background:
                          product.image && product.image !== "N/A"
                            ? `url(${product.image}) center/cover`
                            : "#EAEAEA",
                        borderRadius: "8px",
                      }}
                    />
                    <Card.Body>
                      <div className="d-flex justify-content-between">
                        <span>⭐ 4.7 (42)</span>
                        <i className="bi bi-heart"></i>
                      </div>
                      <Card.Title className="mt-2">
                        {product.name.length > 30
                          ? product.name.substring(0, 30) + "..."
                          : product.name}
                      </Card.Title>
                      <Card.Text className="text-muted small">
                        {product.description.substring(0, 50)}...
                      </Card.Text>
                      <div className="d-flex align-items-center">
                        <h5 className="me-2">${product.price}</h5>
                        {product.onSale && (
                          <>
                            <h6 className="text-muted text-decoration-line-through">
                              ${product.price + 5}
                            </h6>
                            <span className="badge bg-danger ms-2">Sale</span>
                          </>
                        )}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
}
