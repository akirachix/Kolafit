import React from "react";
import "../SignUp/styles.css";
import { useState } from "react";
import { Link } from "react-router-dom";

// import kola from "../Kola.png"

const Signup = () => {
  const gender = [
    { label: "Female", value: "Female" },
    { label: "Male", value: "Male" },
    { label: "Other", value: "Other" },
  ];
  const [sex, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

  const submitting = (event) => {
    event.preventDefault();
    const user = { firstname, lastname, gender, password, email };
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(user),
      redirect: "login",
    };
    
  };
  let handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  return (
    <div className="signUp">
      <div className="contain"></div>
      <div className="main">
        <div className="main-cont">
          <div className="form">
            <h2 className="signup">Sign Up</h2>
            <form onSubmit={submitting}>
              <label>
                <div>
                 <div className="names">
                    
                  <div id="name1" className="name-1">
                    <input
                     style={{width: '85%', marginRight:'75px'}}
                      id="first-name"
                      className="container"
                      type="text"
                      placeholder="First Name"
                      value={firstname}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    ></input>
                  </div>

                  <div id="name2" className="name-2">
                    <input
                  style={{width: '123%', marginRight: '20%'}}
                      id="second-name"
                      className="container"
                      type="text"
                      placeholder="Last Name"
                      value={lastname}
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    ></input>
                  </div>
                 </div>

                </div>

                <div className="">
                  <br />

                  <select
                    className="gender"
                    name="sex"
                    id="genders"
                    onChange={handleGenderChange}
                  >
                    <option value="Select gender">Select Gender</option>
                    {gender.map((gender) => (
                      <option value={sex.valueOf}>{sex.label}</option>
                    ))}
                  </select>
                </div>

                <div className="email">
                  <input
                    className="container"
                    type="text"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="password">
                  <input
                    className="container"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  ></input>
                  <br></br>
                </div>
                <div className="confirm_password">
                  <h5> </h5>
                  <input
                    className="container"
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                  ></input>
                  <br></br>
                </div>
              </label>
              <Link path to="/Login">
                <button className="button" type="submit">
                  SignUp
                </button>
              </Link>
            </form>
            <p className="account">
              Have an account?
              <a href="/home">
                <span> Login </span>{" "}
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
