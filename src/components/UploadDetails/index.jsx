import React, {useState,Component} from 'react';
// import ReactDOM from 'react-dom';
import "./style.css" 
import {Link} from 'react-router-dom'
import "../Kola.png"
// import kola from "../Kola.png" 
//CLICK RFC TO GENERATE LAYOUT.
import kolafit from '../image-removebg-preview 1.png';
function Details(){
    // const billRange=[
    //     {label: "1000-1500", value:"1000-1500"},
    //     {label: "1000-1500", value:"1000-1500"},
    //     {label: "1000-1500", value:"1000-1500"},
    // ]
    const loanAmount=[
        {label: "1000-1500", value:"1000-1500"},
        {label: "1000-1500", value:"1000-1500"},
        {label: "1000-1500", value:"1000-1500"},
        {label: "1000-1500", value:"1000-1500"},
    ]
    const [electricity, setElectricity] = useState("")
    const [range, setRange] = useState("")
    const [amount, setAmount] = useState("")
    const [rent, setRent] = useState(""); 
    const [receipts, setFile2] = useState("");  
    const [watereciepts, setFile] = useState("")  
    
    
    const detailSubmit=(event)=>{
        event.preventDefault()
        setFile(event.target.files[0])
        const details = {electricity, range,amount,rent,watereciepts, receipts }
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(
                details
            ),
            redirect: 'follow'
        };
        fetch("http://127.0.0.1:8000/api/details/", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    // let handleRangeChange=(e)=>{
    //     setRange(e.target.value)
    // }
    let handleAmountChange=(e)=>{
        setAmount(e.target.value)
    }
    return(
        <div className='Details'> 
            <div className='logo'>
            <img  className="logo" src= {kolafit} alt='Logo'></img>
            </div>
            {/* <div className='left'>
    
            <div className='moredetails'>
                <img src= {kola} alt='moredetails'></img>
            </div>
            </div> */}
        <div className='Front'>
        <form onSubmit={detailSubmit}>
         <label>
            <div className="rentAmount">
                            <input className="rent"
                                type="text"
                                placeholder=" Enter rent amount"
                                value={rent}
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
                 <input className="reciepts"type="file" 
                    placeholder="Upload rent Reciepts" value={receipts}  
                    multiple
                   onChange={(e) => {
                    setFile2 (e.target.value);
                } 
                
            
                }
                         ></input></div>
                <div className="billName">
                  <p> Upload Three Electricity Reciepts</p>
                 <input className="name"type="file" 
                    placeholder="Upload Electricity Reciepts" value={electricity} 
                   onChange={(e) => {
                    setElectricity (e.target.value);
                }
                }
                         ></input></div>
        

                <div className="bill">
                  <p> Upload Three Water Bill Reciepts</p>
                 <input className="billReceipts"type="file" 
                    placeholder="Upload Water Bill Reciepts" value={watereciepts} 
                   onChange={(e) => { 
                setFile (e.target.value);  
                
                }
                } 
                         ></input></div>



             <div className='loanAmount'>
            <br />
            <select className='name' onChange={handleAmountChange}>
            <option value="Select your Loan amount "> -- Select your Loan amount -- </option>
            {loanAmount.map((amount) => <option value={amount.value}>{amount.label}</option>)}
            </select> 

            {/* <input type="file" onChange={this.onFileChange} />  */}
            </div> 
       <div className='bottom'>
       <Link path to='/details' ><button className='prev' type='submit' style={{width: "150px", marginBottom: "4px"}} >Back</button></Link>
        <Link path to='/final'> <button className='nex'style={{width: "150px", marginBottom: "4px"}}>Submit</button></Link>
      
       </div>
        {/* <div className='buttons'>   */}
        
        {/* </div>   */}
        </label>
        </form>
        </div>
        </div>     
    );
}
export default Details