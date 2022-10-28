import React, { useState } from "react";
import "./style.css";
// import kola from "../Kola.png"
import { Link } from "react-router-dom";
const Login = () => {
    const [email, setEmail] = useState("");
    console.log(email);
    const [password, setPassword] = useState("");
    console.log(password);
    const handleSubmit = () => {
        // e.preventDefault()
        const data = {
            email: email,
            password: password,
        };
        console.log(JSON.stringify(data));
    };
    return (
        <div className="login">
         <div className='main-container'>
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
                            <input className="box" type="checkbox"></input>
                            <div className="keep">
                            <p className="keep">Keep me logged in</p>
                            </div>
                            
                            <div className="forgot">
                                <a href="/forgot"><span >   Forgot password?   </span> </a>
                            </div>
                        </div>
                    </label>
                    <Link to='/home' >
                    <button className="button" type='submit' >Login</button>
                    </Link>
                </form>
                <p className="account">Don't have an account?
                    <span >  <Link to="/signup">Signup</Link>  </span>
                </p>
            </div>
            </div>
        </div>
    );
};
export default Login;





