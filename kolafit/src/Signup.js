import React from 'react';
import './Signup.css'
import { useState } from 'react';
import './App'


const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [full_name, setFullName] = useState("");
    // const navigate = useNavigate();

    const submitting = (event) => {
        event.preventDefault()
        const user = {full_name, password, email }
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(
                user
            ),
            redirect: 'follow'
        };
        fetch("http://127.0.0.1:8000/user/", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
    return (
        <div className="body">
            {/* <div>
                <img src='Images/Signup.png' />
            </div> */}
            <div>
                <h2 className='signup'>Sign Up</h2>
                <form onSubmit={submitting}>
                    <label>

                        <div className="fullName">
                            <input className="container"
                                type="text"
                                placeholder="Full Name"
                                value={full_name}
                                onChange={(e) => {
                                    setFullName(e.target.value)
                                }}
                            ></input></div>

                        <div className="email">
                            <input className="container"
                                type="text"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }
                                }
                            ></input></div>
                        <div className="password">
                            <h5> </h5>
                            <input className="container"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }
                                }
                            ></input><br></br></div>
                        <div className="confirm_password">
                            <h5> </h5>
                            <input className="container"
                                type="password"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => {
                                    setConfirmPassword(e.target.value);
                                }
                                }
                            ></input><br></br></div>
                    </label>
                    <button className="button" type='submit' >SignUp</button>
                </form>
                <p className="account">Have an account?
                    <a href="/Login"><span>   Login   </span> </a> </p>

            </div>    
        </div>
    )
};
export default Signup;