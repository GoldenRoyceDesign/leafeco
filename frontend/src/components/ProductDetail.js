import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Card, Button, Spinner, Row, Col, Badge, Modal, Form } from "react-bootstrap";
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
  const [showModal, setShowModal] = useState(false);
  const user = JSON.parse(localStorage.getItem("user")); // Get logged-in user

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setSelectedImage(Array.isArray(data.image) ? data.image[0] : data.image);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  const handleAddToCart = () => {
    if (!user) {
      navigate(`/login?redirect=/product/${id}`);
    } else {
      dispatch(
        addToCart({
          userId: user.id,
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

  const cartItem = cartItems.find((item) => item.id === product?._id);
  const quantity = cartItem ? cartItem.quantity : 1;

  // Define delivery days for each pincode
  const deliveryDaysByPincode = {
    "609602": 3,
    "110001": 5,
    "560001": 2,
    "400001": 4,
    "700001": 6
  };

  const [pincode, setPincode] = useState("609602");
  const [deliveryDate, setDeliveryDate] = useState(null);
  const [previousPincode, setPreviousPincode] = useState("609602"); // Store previous pincode

  // Function to calculate delivery date
  const calculateDeliveryDate = (days) => {
    let today = new Date();
    today.setDate(today.getDate() + days);
    return today.toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" });
  };

  // Handle pincode change and update delivery date only if pincode is different
  const handlePincodeChange = () => {
    if (!pincode || pincode.length !== 6 || isNaN(pincode)) {
      alert("❌ Please enter a valid 6-digit pincode.");
      return;
    }

    if (pincode === previousPincode) {
      alert("⚠️ Pincode is the same. Delivery date remains unchanged.");
      return;
    }

    if (deliveryDaysByPincode[pincode]) {
      const deliveryDay = calculateDeliveryDate(deliveryDaysByPincode[pincode]);
      setDeliveryDate(`📦 Estimated Delivery: ${deliveryDay}`);
      setPreviousPincode(pincode); // Update previous pincode
    } else {
      alert("🚫 Delivery is not available for this pincode.");
      setDeliveryDate("");
    }
  };


  if (loading) return <Spinner animation="border" />;
  if (!product) return <p>Product not found.</p>;

  return (
    <Container className="mt-4">
      <Row className="align-items-start">
        <Col md={2} className="d-flex flex-column align-items-center">
          {Array.isArray(product.image) ? product.image.map((img, index) => (
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
          )) : (
            <img src={product.image} alt="Product" width="60" height="60" />
          )}
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
                onClick={() => dispatch(decreaseQuantity({ userId: user?.id, itemId: product?._id }))}
              >
                -
              </Button>
              <span className="mx-3">{quantity}</span>
              <Button
                variant="outline-secondary"
                onClick={() => dispatch(increaseQuantity({ userId: user?.id, itemId: product?._id }))}
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

          {/* DELIVERY OPTIONS */}
          <div className="mt-4 p-3 border rounded">
            <h5>DELIVERY OPTIONS 🚚</h5>
            <div className="d-flex align-items-center mt-2">
              <Form.Control
                type="text"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                placeholder="Enter Pincode"
                className="form-control w-50"
              />
              <Button variant="outline-primary" className="ms-2" onClick={handlePincodeChange}>
                Change
              </Button>
            </div>

            <ul className="list-unstyled mt-3">
              <li>📦 <strong>Get it by:</strong> <span className="text-success">{deliveryDate || "Calculating..."}</span></li>
              <li>💰 <strong>Pay on delivery:</strong> Available</li>
              <li>🔄 <strong>Easy 14 days return & exchange:</strong> Available</li>
              <li>✅ 100% Original Products</li>
            </ul>
          </div>

          {/* PRODUCT DETAILS */}
          <div className="mt-4 p-3 border rounded">
            <h5>PRODUCT DETAILS</h5>
            <p><strong>Main Material:</strong> {product.material || "Synthetic upper / Rubber outsole"}</p>
            <p><strong>Brand Colour:</strong> {product.brandColor || "FTWWH/T/CBLACK/CBLACK"}</p>
            <p><strong>Warranty:</strong> Provided by brand owner/manufacturer</p>
            <p>{product.description || "Lorem ipsum placeholder text for previewing product details."}</p>
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




