import React from "react";
import "./navbar.css";
import { Navigate, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const login = () => {
        navigate("./login");
    };

    const register = () => {
        navigate("./register");
    };
    // const register = () => {
    //     navigate("./register");
    // };
    return (
        <div>
            <div className="navbar">
                <div className="navContainer">
                    <span className="logo">Booking.com</span>
                    <div className="navItems">
                        <button className="navButton" onClick={login}>
                            LogIn
                        </button>
                        <button className="navButton" onClick={register}>
                            Register
                        </button>
                        {/* <button className="navButton">Login</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
