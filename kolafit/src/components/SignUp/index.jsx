import React from 'react';
import "../SignUp/styles.css"
import { useState } from 'react';
import kola from "../Kola.png"
import {Link} from "react-router-dom";



const Signup = () => {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [fullname, setFullName] = useState("");
const [gender, setGender] = useState("");


const submitting = (event) => {
    event.preventDefault()
    const user = {fullname, gender,password, email }
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(
            user
        ),
        redirect: 'login'
    };
   
}



  return(
    <div className='signUp'>
      <div className='main'>
         <img src={kola} height = "480" width = "380"/>
      </div>
<div className='main-container'>
      <div className='form'>
                <h2 className='signup'>Sign Up</h2>
                <form onSubmit={submitting}>
                    <label>
                        <div className="fullName">
                            <input className="container"
                                type="text"
                                placeholder="Full Name"
                                value={fullname}
                                onChange={(e) => {
                                    setFullName(e.target.value)
                                }}
                            ></input></div>
                        <div className="gender">
                            <input className="container"
                                type="text"
                                placeholder="Gender"
                                value={gender}
                                onChange={(e) => {
                                    setGender(e.target.value)
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
                    <Link to='/home' >
                    <button className="button" type='submit' >SignUp</button>
                    </Link>
                    <p className="account">Don't have an account?
                    <a href="/Login"><span> Login </span> </a> </p>
                </form>
               
            </div>
     </div>
     </div>
    
  )}
    
    


   
export default Signup;