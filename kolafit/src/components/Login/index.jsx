import React from 'react';
// import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import axios from "axios";
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';


function Login() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const handleChange = e =>{
    const {name,value} = e.target
    setUser({
    ...user,//spread operator
    [name]:value
    })
    } 
   
  const validationsSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),

  });
  const submit = () => {
    const { email, password } = user
    if (email && password) {
      axios.get("https://frozen-mesa-94052.herokuapp.com/api/login/",user)
        .then(res => {
          console.log(res)
          toast('Welcome to kolafit')
          navigate("/home")
        })
        .catch(error => {
          console.log(error)
          toast('Unable to login, to try again or signup')
        })
    }
    else {
      console.log(user)
      alert("invalid input")
    };
  }
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationsSchema)
  });
  const onSubmit = data => {
    console.log(JSON.stringify(data, null, 2));
  };
  return (
    <div className='main-container' style={{
      backgroundColor: "white",
      width: " 50%",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "3%",
      borderRadius: "12px",
      border: "solid 2px white",
      boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
    }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 style={{ color: "#6A7DE1", fontWeight: "bold", marginTop: "4%" }}>Login</h2>
        <div className="form-group">

          <input
            placeholder='Enter your Email'
            className='container'
            style={{ marginTop: "4%" }}
            name="email"
            type="text"
            {...register('email')}
            onChange={handleChange}
          

          />
          <div className="invalid-feedback">{errors.email?.message}</div>
        </div>

        <div className="form-group">

          <input
            className='container'
            placeholder='Enter password'
            style={{ marginTop: "4%" }}
            name="password"
            type="password"
            {...register('password')}
            onChange={handleChange}
          

          />
          <div className="invalid-feedback">{errors.password?.message}</div>
        </div>
        <div>
          <button type="submit" onClick={submit} className="button" style={{
            color: "white", backgroundColor: "#6a7de1", border: "2px #6A7DE1  solid", marginLeft: "auto",
            marginRight: "auto", height: "30px",
            width: "400px", borderRadius: "10px", marginTop: "4%"
          }} >
            Login
          </button>
        </div>
        <div>
          <p className="account" style={{ color: "black", marginLeft: "auto", marginRight: "auto" }}>Don't have an account?
            <span style={{ color: "blue", textDecoration: "none" }}>  <Link to="/signup">Signup</Link>  </span>
          </p>
        </div>
      </form>

    </div>
  )
}
export default Login;


