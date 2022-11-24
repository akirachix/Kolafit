import React, { useState, useEffect, Component } from "react";
// import ReactDOM from 'react-dom';
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import "../Kola.png";
import kolafit from "../image-removebg-preview 1.png";
import axios from "axios";


function Details() {
  const [income, setIncome] = useState("");
  const [rent_amount, setRent] = useState("");
  const [electricity_bill, setElectricityBill] = useState("");
  const [water_bill, setWaterBill] = useState("");
  const [loan_amount, setLoanAmount] = useState("");

  useEffect(() => { 
    localStorage.setItem('loan_amount', JSON.stringify(loan_amount));
    }, [loan_amount]); 
  const navigate= useNavigate();


  return (
    <div className="Details">
      <div className="logo">
        <img className="logo" src={kolafit} alt="Logo"></img>
      </div>
      <div className="Front">
        <form >
          <div className="rentAmount">
            <input
              className="rent"
              type="number"
              placeholder=" Enter income"
              value={income}
              onChange={(e) => {
                setIncome(e.target.value);
              }}
            ></input>
          </div>
          <div className="rentAmount">
            <input
              className="rent"
              type="number"
              placeholder=" Enter rent amount"
              value={rent_amount}
              onChange={(e) => {
                setRent(e.target.value);
              }}
            ></input>
          </div>

          <div className="RR">
            <input
              className="reciepts"
              type="text"
              placeholder="Input electricity bill"
              value={electricity_bill}
              onChange={(e) => {
                setElectricityBill(e.target.value);
              }}
            ></input>
          </div>
          <div className="bill">
            <input
              className="billReceipts"
              type="text"
              placeholder="Input Water Bill"
              value={water_bill}
              onChange={(e) => {
                setWaterBill(e.target.value);
              }}
            ></input>
          </div>
          <div className="loans">
            <input
              className="loanAmount"
              type="number"
              placeholder="Enter Loan Amount"
              value={loan_amount}
              onChange={(e) => {
                setLoanAmount(e.target.value);
              }}
            ></input>
          </div>
          <div className="Bot">
            <Link to="/">
              <button className="prev" type="submit">
                Back
              </button>
            </Link>
            <Link to="/final">
              <button className="nex" type="submit">
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


