import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { useNavigate, useLocation } from "react-router-dom";
import loginImage from '../assets/login/login-container.png'
import logo from "../assets/logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // Get the redirect path from query params (default to homepage)
  const redirectPath = new URLSearchParams(location.search).get("redirect") || "/";

  const handleLogin = async () => {
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log("Login Response:", data);
    
    if (response.ok) {
      dispatch(login(data));
      dispatch(login({ id: data.id, email: data.email })); // Store in localStorage
      navigate(redirectPath);
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="login p-5">
      <div className="container">
        <div className="row" style={{ background: '#E7F2F4' }}>
          <div className="col-md-6 p-0 m-0">
            <img src={loginImage} alt="login-image" className="img-fluid w-75" />
          </div>
          <div className="col-md-6 login-right pb-4">
            <img src={logo} alt="logo-image" className="img-fluid" />
            <h2>Login</h2>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>CONTINUE</button>
            <p>Having trouble logging in? Get help</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
