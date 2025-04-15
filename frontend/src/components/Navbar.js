import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { Container, Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { FaSearch, FaShoppingCart, FaBell, FaUserCircle } from "react-icons/fa";
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";
import { clearCart } from "../redux/cartSlice";

export default function NavBar() {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);

    // Extract username from email (before @)
    const username = user?.email?.split("@")[0];

    const handleLogout = () => {
        dispatch(logout());
        dispatch(clearCart());
    };

    // Reference to Bootstrap navbar toggler
    const navbarRef = useRef(null);

    // Function to close navbar on link click
    const closeNavbar = () => {
        if (navbarRef.current && navbarRef.current.classList.contains("show")) {
            navbarRef.current.classList.remove("show"); // Force close collapse
        }
    };

    return (
        <>
            {/* Top Bar */}
            <div className="top-bar text-white text-center py-2" style={{ background: '#024B34' }}>
                <p className="mb-0">
                    All Orders Placed Between 2.15 - 2.23 will ship on Monday, 2.24. | Free Shipping On Orders Over $65
                </p>
            </div>

            {/* Navbar */}
            <Navbar expand="lg" sticky="top" className="navbar px-3">
                <Container fluid>
                    {/* Logo */}
                    <Navbar.Brand href="/">
                        <img src={logo} alt="Leaf Eco Logo" height="40" className="me-2" />
                    </Navbar.Brand>

                    {/* Navbar Toggle for Mobile */}
                    <Navbar.Toggle aria-controls="navbarNav" data-bs-toggle="collapse" data-bs-target="#navbarNav" />

                    <Navbar.Collapse id="navbarNav" ref={navbarRef} className="collapse navbar-collapse">
                        {/* Centered NavLinks */}
                        <Nav className="mx-auto d-flex justify-content-center gap-4">
                            <NavLink className="nav-link" to="/" onClick={closeNavbar}>Home</NavLink>
                            <NavLink className="nav-link" to="/about" onClick={closeNavbar}>About</NavLink>
                            <NavLink className="nav-link" to="/product" onClick={closeNavbar}>Products</NavLink>
                            <NavLink className="nav-link" to="/contact" onClick={closeNavbar}>Contact Us</NavLink>
                        </Nav>

                        {/* Search Bar */}
                        <Form className="d-flex mx-auto w-50">
                            <Button variant="outline-none">
                                <FaSearch />
                            </Button>
                            <FormControl
                                type="search"
                                placeholder="Search for Products, Brands and More"
                                className="search me-2"
                            />
                        </Form>

                        {/* Right Side Icons */}
                        <div className="d-flex gap-3">
                            <div className="user-container">
                                {user ? (
                                    <div className="user-dropdown">
                                        <FaUserCircle size={28} className="user-icon" />
                                        <div className="dropdown-box">
                                            <span className="username">{username}</span>
                                            <button className="logout-btn" onClick={handleLogout}>
                                                Logout
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <NavLink className="nav-link" onClick={closeNavbar}>
                                        <FaUserCircle size={28} />
                                    </NavLink>
                                )}
                            </div>
                            
                            <NavLink className="nav-link" to="/cart" onClick={closeNavbar}>
                                <FaShoppingCart size={22} />
                            </NavLink>
                            <NavLink className="nav-link" to="/notifications" onClick={closeNavbar}>
                                <FaBell size={22} />
                            </NavLink>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Custom Active NavLink Styling */}
            <style>
                {`
                    .nav-link {
                        color: black !important;
                        font-weight: 500;
                    }
                    .nav-link.active {
                        color: green !important;
                    }
                `}
            </style>
        </>
    );
}
