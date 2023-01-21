import React, { useState } from "react";
import "./login.css";

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(pass); 
        
        //todo => compare user data and verfy  users valid or not
        //    if user is valid logged succesfully and redirect according
        //   if is invalid message
    };

    return (
        <div className="auth-form-container form">
            <h2>LogIn</h2>

            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="youremail@gmail.com"
                    id="email"
                    name="email"
                />
                <label htmlFor="password">Password</label>
                <input
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    type="password"
                    placeholder="********"
                    id="password"
                    name="password"
                />
                <button className="submit" type="submit">
                    Log In
                </button>
            </form>
            <button
                className="link-btn"
                onClick={() => props.onFormSwitch("Register")}
            >
                Don't have an account? Register here.
            </button>
        </div>
    );
};

export default Login;
