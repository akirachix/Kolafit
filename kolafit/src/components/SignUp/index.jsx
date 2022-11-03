import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from "axios";
import './styles.css';
import { toast } from 'react-toastify';
import Select from "react-select";
// import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
// toast.configure()

function Signup() {


  const options = [
    { value: 'M', label: 'Male' },
    { value: 'F', label: 'Female' },
    { value: 'O', label: 'Other' },
    
  ]

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    email: "",
    password: "",
    confirm_password: "",


  })
  const handleChange = e =>{
    const {name,value} = e.target
    setUser({
    ...user,//spread operator
    [name]:value
    })
    }   
  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required('Firstname is required'),
    last_name: Yup.string()
      .required('Lastname is required'),

    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
    confirm_password: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
    acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required')
  });
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });
  const onSubmit = data => {
    console.log(JSON.stringify(data, null, 2));
  };
  const navigate = useNavigate()
  const submitting = () => {
    const { first_name, last_name, gender, email, password, confirm_password } = user
    if (first_name && last_name && email && gender && password && confirm_password) {
      axios.post("https://fierce-hollows-95496.herokuapp.com/api/signup/",user)
        .then(res => {
          console.log(res)
          toast('You have successfully been registered to Kolafit, Login to continue')
          navigate("/login")
        })
        .catch(error => {
          console.log(error)
          toast('Unable to register, to try again')
        })
    }
    else {
      console.log(user)
      alert("invalid input")
    };
  }
 
  return (
    <div className="main-container" style={{
      width: " 50%",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "3%",
      borderRadius: "12px",
      border: "solid 2px white",
      boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
    }}>
      <h2 style={{ color: "#6A7DE1", fontWeight: "bold", marginTop: "4%" }}>Signup</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">

          <input
            className='container'
            style={{ marginTop: "4%" }}
            placeholder='Enter first name'
            name="first_name"
            type="text"
            {...register('first_name')}
            onChange={handleChange}

          />
          <div className="invalid-feedback">{errors.first_name?.message}</div>
        </div>

        <div className="form-group">

          <input
            className='container'
            placeholder='Enter Lastname'
            style={{ marginTop: "4%" }}
            name="last_name"
            type="text"
            {...register('last_name')}
            onChange={handleChange}
          

          />
          <div className="invalid-feedback">{errors.last_name?.message}</div>
        </div>

       <div style={{marginTop:"4%"}}>
                <Select className='continer'sty name="gender" placeholder="Select Gender" options={options}
                {...register("gender")}
                // onChange={handleChange}
          
                onChange={ gender=>handleChange({target:{value:gender.value, name:'gender'}})}
                />
                <div className='invalid-feedback'>{errors.gender?.message}</div>
                </div>

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

        <div className="form-group">

          <input
            className='container'
            style={{ marginTop: "4%" }}
            placeholder='Confirm password'
            name="confirm_password"
            type="password"
            {...register('confirm_password')}
            onChange={handleChange}

          />
          <div className="invalid-feedback">
            {errors.confirm_password?.message}
          </div>
        </div>

        <div className="form-group form-check" style={{ marginTop: "4%" }}>
          <input
            name="acceptTerms"
            type="checkbox"
            {...register('acceptTerms')}
            onChange={handleChange}

          />
          <label htmlFor="acceptTerms" className="form-check-label">
            I have read and agree to the Terms
          </label>
          <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
        </div>
        <Link></Link>
        <div>
          <button type="submit" onClick={submitting} className="button" style={{
            color: "white", backgroundColor: "#6a7de1", border: "2px #6A7DE1  solid", marginLeft: "auto",
            marginRight: "auto", height: "30px",
            width: "400px", borderRadius: "10px", marginTop: "4%"
          }}>
            Signup
          </button>
        </div>
        <div>
          <p className="account" style={{ color: "black", marginLeft: "auto", marginRight: "auto" }}>Already have an account?
            <Link path to="/login"><span style={{ color: "blue", textDecoration: "none" }}>  <Link to="/login">Login</Link>  </span></Link>
          </p>
        </div>

      </form>
    </div>
  );
};

export default Signup;