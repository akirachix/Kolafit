import React, { useState, Component } from "react"; 
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios'
import {Link, useNavigate} from "react-router-dom";
import { useForm } from 'react-hook-form';
// import ReactDOM from 'react-dom';
import "./style.css";
import "../Kola.png";
// import kola from "../Kola.png"
//CLICK RFC TO GENERATE LAYOUT.
import kolafit from "../image-removebg-preview 1.png";
function Details() {

  const [details, setDetails] = useState({
    income: "",
    rent_amount: "",
    electricity_amount: "",
    electricity_receipts: "",
    water_amount: "",
    water_receipts: "",
    loan_amount: "",
  })
  const handleChange = e =>{
    const {name,value} = e.target
    setDetails({
    ...details,//spread operator
    [name]:value
    })
    }
    const validationSchema = Yup.object().shape({
      income: Yup.string().required('income is required'),
      rent_amount: Yup.string()
          .required('rent_amount is required'), 
      electricity_amount: Yup.string()
          .required('Electricity amount is required'),
      electricity_receipts: Yup.object().shape({name:Yup.string().required('upload electricity reciepts')})
        .label('File'),
      water_amount: Yup.string()
        .required('Water bill amount is required'),  
      water_receipts: Yup.object().shape({name:Yup.string().required('upload Water Bill reciepts')})
        .label('File'),    
      loan_amount: Yup.string()

        .required('Loan Amount is required'),   
         
      });
    const submitDetails = () => {
        const { income, rent_amount, electricity_amount,electricity_receipts,water_amount,water_receipts,loan_amount } = details
        if (income && rent_amount && electricity_amount &&electricity_receipts && water_amount && water_receipts &&loan_amount) {
          axios.post("https://frozen-mesa-94052.herokuapp.com/api/details/",details)
            .then(res => {
              console.log(res)
         
            })
            .catch(error => {
              console.log(error)
          
            })
        }
        else {
          console.log(details)
          alert("invalid input")
        };
      }
      const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm({
        resolver: yupResolver(validationSchema)
      }); 

      const onSubmit = data => {
        console.log(JSON.stringify(data));
      };



  return (
    <div className="Details">
      <div className="logo">
        <img className="logo" src={kolafit} alt="Logo"></img>
      </div>
      <div className="Front">
        <form onSubmit={handleSubmit}>
          <div className="rentAmount">
            <input
              className="rent"
              type="number"
              placeholder=" Enter  income"
              name="income" 
              {...register('income',)}
              onChange={handleChange}
            ></input>
          </div>
          <div className="rentAmount">
            <input
              className="rent"
              type="text"
              placeholder=" Input rent amount"
              name="rent_amount" 
              {...register('rent_amount',)}
              onChange={handleChange}
            ></input>
          </div>
          <div className="rentAmount">
            <input
              className="rent"
              type="file"
              placeholder=" Upload rent reciept"
              name="rent_receipts" 
              {...register('rent_receipts',)}
              onChange={handleChange}
    
            ></input>
          </div>

          <div className="rentAmount">
            {/* <p> Upload Rent Reciepts</p> */}
            <input
              className="reciepts"
              type="text"
              placeholder="Input electricity bill"
              multiple 
              name="electricity_amount" 
              {...register('electricity_amount',)}
              onChange={handleChange}
         
            ></input>
          </div>

          <div className="rentAmount">
            {/* <p> Upload Rent Reciepts</p> */}
            <input
              className="reciepts"
              type="file"
              style={{ marginTop: "4%" }}
              placeholder="Input electricity bill"
              multiple
              name="electricity_receipts" 
              {...register('electricity_rec',)}
              onChange={handleChange}

            ></input>
          </div>

          <div className="rentAmount">
            <input
              className="billReceipts"
              type="text"
              placeholder="Input Water Bill "
              name="water_amount" 
              {...register('water_amount',)}
              onChange={handleChange}
    
            ></input>
          </div>

          <div className="rentAmount">
            <input
              className="billReceipts"
              type="file"
              placeholder="Upload Water Reciept" 
              name="water_receipts" 
              {...register('water_receipts',)}
              onChange={handleChange}
  
            ></input>
          </div>
          <div className="loans">
            <input
              className="loanAmount"
              type="number"
              placeholder="Enter Loan Amount" 
              name="loan_amount" 
              {...register('loan_amount',)}
              onChange={handleChange}
 
            ></input>
          </div>
          <div className="Bot">
            {/* <Link to="/">
                 <button className="prev" type='submit' >Back</button>
                 </Link> */}
            <Link to="/uploadetails">
              <button className="nex" type="submit" onClick={submitDetails}>
                Submit
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Details;
