import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImage from '../assets/login/login-container.png'
import logo from "../assets/logo.png";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    const response = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (response.ok) {
      alert(data.message);
      navigate("/login");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="signup p-5">
      <div className="container">
        <div className="row" style={{ background: '#E7F2F4' }}>
          <div className="col-md-6 p-0 m-0">
            <img src={loginImage} alt="login-image" className="img-fluid w-75" />
          </div>
          <div className="col-md-6 login-right pb-4">
            <img src={logo} alt="logo-image" className="img-fluid" />
            <h2>Signup</h2>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <p>By continuing, I agree to the Terms of Use & Privacy policy </p>
            <button onClick={handleSignup}>Signup</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
