import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/authSlice";
import { useNavigate, useLocation } from "react-router-dom";
import loginImage from "../assets/login/login-container.png";
import logo from "../assets/logo.png";
import { Modal, Button } from "react-bootstrap"; // Bootstrap Modal

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // State for error messages
  const [showErrorModal, setShowErrorModal] = useState(false); // State for modal visibility

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // Get the redirect path from query params (default to homepage)
  const redirectPath = new URLSearchParams(location.search).get("redirect") || "/";

  const handleLogin = async () => {
    try{
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
    
      const data = await response.json();
    
      if (response.ok) {
        dispatch(loginUser({ user: data.user, token: data.token })); // Use loginUser to restore cart
        navigate(redirectPath);
      } else {
        alert(data.message);
      }
    }
    catch (err) {
      setError("Invalid credentials. Please try again."); // ✅ Now setError is used
    }
  
  };

  return (
    <div className="login p-5">
      <div className="container">
        <div className="row" style={{ background: "#E7F2F4" }}>
          <div className="col-md-6 p-0 m-0">
            <img src={loginImage} alt="login-image" className="img-fluid w-75" />
          </div>
          <div className="col-md-6 login-right pb-4 text-center">
            <img src={logo} alt="logo-image" className="img-fluid mb-3" />
            <h2>Login</h2>
            <input
              type="email"
              className="form-control my-2"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="form-control my-2"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn btn-primary" onClick={handleLogin}>
              CONTINUE
            </button>
            <p className="mt-2">Having trouble logging in? <a href="/">Get help</a></p>
          </div>
        </div>
      </div>

      {/* Bootstrap Modal for Error Messages */}
      <Modal show={showErrorModal} onHide={() => setShowErrorModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>{error}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowErrorModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Login;
