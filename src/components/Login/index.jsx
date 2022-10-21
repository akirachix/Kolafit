import React, { useState } from "react";
import "./style.css";
import kola from "../Kola.png"
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    console.log(email);
    const [password, setPassword] = useState("");
    console.log(password);

    const handleSubmit = () => {
        const data = {
            email: email,
            password: password,
        };
        console.log(JSON.stringify(data));
    };

    const navigateHome = () => {
        // navigate("/home");
    };
    return (
        <div className="login">
            <div className="image">
                <img src={kola} alt="login" width="500" height="500"></img>
            </div>


            <div className="form">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        <div className="email">
                            <input
                                className="container"
                                type="text"
                                placeholder="Enter email"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            ></input>
                        </div>
                        <div className="password">
                            {/* <h5> </h5> */}
                            <input
                                className="container"
                                type="password"
                                placeholder="Enter password"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            ></input>
                            <br></br>
                        </div>
                        <div className="check">
                            <input type="checkbox"></input>
                            <p>Keep me logged in</p>
                            <div className="forgot">
                                <a href="/forgot"><span >   Forgot password?   </span> </a>
                            </div>
                        </div>
                    </label>
                    {/* <button className="button" onClick={navigateHome}>
                        Login
                    </button> */}
                    <button className="button">
                        <Link to= "/login" >
                            Login
                        </Link>
                    </button>
                </form>
                <p className="account">Don't have an account?
                    <span >  <Link to="/signup">Signup</Link>  </span> 
                </p>
            </div>

        </div>
    );
};
export default Login;