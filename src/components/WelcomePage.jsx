import React, { useState } from "react";
import "./WelcomePage.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate("/todo");
            })
            .catch((err) => alert(err.message));

        setEmail("");
        setPassword("");
    };

    return (
        <div className="overlay">
            <div className=" form-container">
                <div className="circleWrapper">
                    <form className="form">
                        <h1>Login To-do</h1>
                        <div className="flex">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </div>

                        <div className="flex">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="password here"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                        </div>
                        <button className="loginBtn" onClick={handleLogin}>
                            Login
                        </button>
                        <p className="newAccount">Create new account</p>

                        <div className="demoUser">
                            <p> Demo Email: admin@gmail.com </p>
                            <p> Password: admin35 </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;
