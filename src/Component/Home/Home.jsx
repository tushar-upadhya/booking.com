import React, { useState } from "react";
import "./home.css";
import Footer from "../Footer/Footer";
import Login from "../Navbar/login/Login";
import Register from "../Navbar/register/Register";
import Design from "./Design/Design";
import Mail from "../mail/Mail";
import Property from "./property/Property";
import SearchItem from "../searchItem/SearchItem";
// import { Navbar } from "react-bootstrap";
// import Header from "../header/Header";

const Home = () => {
    const [currentForm, setCurrentForm] = useState("login");
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    const [loggedInUserData, setLoggedInUserData] = useState({});

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    };

    return (
        <div>
            {/* {currentForm === "login" ? (
                <Login
                    onFormSwitch={toggleForm}
                    isUserLoggedIn={isUserLoggedIn}
                    setIsUserLoggedIn={setIsUserLoggedIn}
                    setLoggedInUserData={setIsUserLoggedIn}
                />
            ) : (
                <Register onFormSwitch={toggleForm} />
            )} */}

            <div className="homeContainer">
                <Design />
            </div>
            <Property />
            {/* <SearchItem /> */}
            <Mail />
            <Footer />
        </div>
    );
};

export default Home;
