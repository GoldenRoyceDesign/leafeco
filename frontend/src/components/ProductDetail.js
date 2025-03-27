import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Card, Button, Spinner, Row, Col, Badge, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, increaseQuantity, decreaseQuantity } from "../redux/cartSlice";

export default function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState("");
  

  // Find the product in the cart
  const cartItem = cartItems.find((item) => item.id === id);
  const quantity = cartItem ? cartItem.quantity : 1;
  const [showModal, setShowModal] = useState(false);
  

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },})
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setSelectedImage(Array.isArray(data.image) ? data.image[0] : data.image);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  const handleAddToCart = () => {
    if  (!localStorage.getItem("token")) {
      // Redirect to login page and pass the current page as "redirect" parameter
      navigate(`/login?redirect=/product/${id}`); // Redirect to login if not authenticated
    } else {
      dispatch(
        addToCart({
          id: product._id,
          name: product.name,
          image: product.image,
          price: product.price,
          quantity: 1,
        })
      );
      setShowModal(true);
    }
  };

  if (loading) return <Spinner animation="border" />;
  if (!product) return <p>Product not found.</p>;

  const images = Array.isArray(product.image) ? product.image : [product.image];

  return (
    <Container className="mt-4">
      <Row className="align-items-start">
        <Col md={2} className="d-flex flex-column align-items-center">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Product Thumbnail ${index}`}
              className="mb-2 rounded"
              style={{
                width: "60px",
                height: "60px",
                cursor: "pointer",
                border: selectedImage === img ? "2px solid #000" : "none",
              }}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </Col>

        <Col md={5}>
          <Card className="shadow-sm">
            <div
              style={{
                width: "100%",
                height: "350px",
                background: `url(${selectedImage}) center/cover no-repeat`,
                borderRadius: "8px",
              }}
            />
          </Card>
        </Col>

        <Col md={5}>
          <h4 className="fw-bold">{product.name}</h4>
          <p className="text-muted">
            ⭐⭐⭐⭐⭐ <span className="text-dark">(42 reviews)</span>
          </p>

          <h5 className="d-inline">${product.price.toFixed(2)}</h5>
          {product.onSale && <Badge bg="danger" className="ms-2">Sale</Badge>}

          <div className="mt-3">
            <strong>Quantity:</strong>
            <div className="d-flex align-items-center mt-3">
              <Button
                variant="outline-secondary"
                disabled={quantity <= 1}
                onClick={() => dispatch(decreaseQuantity(product._id))}
              >
                -
              </Button>
              <span className="mx-3">{quantity}</span>
              <Button
                variant="outline-secondary"
                onClick={() => dispatch(increaseQuantity(product._id))}
              >
                +
              </Button>
            </div>
          </div>

          <div className="mt-4">
            <Button variant="warning" className="me-2 px-4" onClick={handleAddToCart}>
              ORDER NOW
            </Button>
            <Button variant="secondary">ADD TO WISHLIST</Button>
          </div>
        </Col>
      </Row>

      {/* Add To Cart Success Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Item Added to Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>{product.name}</strong> has been added to your cart.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Continue Shopping</Button>
          <Button variant="primary" href="/cart">Go to Cart</Button>
        </Modal.Footer>
      </Modal>

    </Container>
  );
}
