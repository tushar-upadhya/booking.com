import React, { useState } from "react";
import "./home.css";
import Footer from "../Footer/Footer";
import Login from "../Navbar/login/Login";
import Register from "../Navbar/register/Register";
import Design from "./Design/Design";
// import { Navbar } from "react-bootstrap";
// import Header from "../header/Header";

const Home = () => {
    const [currentForm, setCurrentForm] = useState("login");

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    };

    return (
        <div>
            {currentForm === "login" ? (
                <Login onFormSwitch={toggleForm} />
            ) : (
                <Register onFormSwitch={toggleForm} />
            )}
            <div className="homeContainer">
                <Design />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
