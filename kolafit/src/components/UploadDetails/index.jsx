import React, {useState,Component} from 'react';
// import ReactDOM from 'react-dom';
import "./style.css"
import {Link} from 'react-router-dom'
import "../Kola.png"
// import kola from "../Kola.png"
//CLICK RFC TO GENERATE LAYOUT.
import kolafit from '../image-removebg-preview 1.png';
import axios from "axios"
function Details(){
    const [rent_amount, setRent] = useState("");
    const [rent_receipts, setFile2] = useState('');
    const [electricity_receipts, setElectricity] = useState('')
    const [water_receipts, setFile] = useState('')
    const [loan_amount, setAmount] = useState("")
    // const detailSubmit = (e) => {
    //     e.preventDefault()
    //     const user= { rent_amount,  rent_receipts,electricity_receipts,water_receipts,loan_amount}
    //     console.log(user);
    //     if (rent_amount && rent_receipts && electricity_receipts && water_receipts && loan_amount) {
    //       axios.post("https://fierce-hollows-95496.herokuapp.com/api/details/",user)
    //         .then(res => {
    //           console.log(res)
    //         })
    //         .catch(error => {
    //           console.log(error)
    //         })
    //     }
    //     else {
    //       console.log(user)
    //       alert("invalid input")
    //     }
    //   }
    const detailSubmit = (e)=>{
        e.preventDefault();
        console.log("receits",rent_receipts.replace('C:\\fakepath\\',''));
        let form_data = new FormData();
        form_data.append('rent_amount', rent_amount);
        form_data.append('rent_receipts',  rent_receipts.replace('C:\\fakepath\\',''));
        form_data.append('electricity_receipts',electricity_receipts.replace('C:\\fakepath\\',''));
        form_data.append('water_receipts', water_receipts.replace('C:\\fakepath\\',''));
        form_data.append('loan_amount', loan_amount);
        axios.post("https://fierce-hollows-95496.herokuapp.com/api/details/", form_data, {
        }).then(res => {
          console.log(res.data);
        }).catch(err => console.log(err))
    };
    return(
        <div className='Details'>
            <div className='logo'>
            <img  className="logo" src= {kolafit} alt='Logo'></img>
            </div>
        <div className='Front'>
        <form onSubmit={detailSubmit}>
            <div className="rentAmount">
                            <input className="rent"
                                type="number"
                                placeholder=" Enter rent amount"
                                value={rent_amount}
                                onChange={(e) => {
                                    setRent(e.target.value)
                                }}
                            ></input></div>
                           {/* <div className="rentReciepts">
                            <input className="reciept"
                                type="text"
                                placeholder="Upload Rent Reciepts"
                                value={receipts}
                                onChange={(e) => {
                                    setReceipts(e.target.value)
                                }}
                            ></input></div>                  */}
                <div className="RR">
                  <p> Upload Rent Reciepts</p>
                 <input className="reciepts"
                 type="file"
                    placeholder="Upload rent Reciepts" value={rent_receipts}
                    accept="image/png, image/jpeg"
                    multiple
                   onChange={(e) => {
                    // .replace('C:\\fakepath\\','')
                    setFile2 (e.target.value);
                }
                }
                         ></input></div>
                <div className="billName">
                  <p> Upload Three Electricity Reciepts</p>
                 <input className="name"type="file"
                    placeholder="Upload Electricity Reciepts" value={electricity_receipts} accept="image/png, image/jpeg"
                   onChange={(e) => {
                    setElectricity (e.target.value);
                }
                }
                         ></input></div>
                <div className="bill">
                  <p> Upload Three Water Bill Reciepts</p>
                 <input className="billReceipts"type="file"  accept="image/png, image/jpeg"
                    placeholder="Upload Water Bill Reciepts" value={water_receipts}
                   onChange={(e) => {
                setFile (e.target.value);
                }
                }
                         ></input></div>
                <div className="loans">
                 <input className="loanAmount"type="number"
                    placeholder="Enter Loan Amount" value={loan_amount}
                   onChange={(e) => {
                    setAmount (e.target.value);
                }
                }
                         ></input></div>
       <div className='bottom'>
       <Link path to='/details' ><button className='prev' type='submit' style={{width: "150px", marginBottom: "4px"}} >Back</button></Link>
        <Link path to='/final'>
             <button className='nex'style={{width: "150px", marginBottom: "4px"}}>Submit</button>
        </Link>
       </div>
        </form>
        </div>
        </div>
    );
}
export default Details