import React, {useState,Component} from 'react';
// import ReactDOM from 'react-dom';
import "./style.css" 
import {Link} from 'react-router-dom'
import "../Kola.png"
// import kola from "../Kola.png" 
//CLICK RFC TO GENERATE LAYOUT.
import kolafit from '../image-removebg-preview 1.png';
function Details(){
    const bills = [
        { label: "Water", value:"Water"},
        { label: "Electricity", value: "Electricity" },
        // { label: "All", value: "All" }
    ]
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
    const [bill, setBill] = useState("")
    const [range, setRange] = useState("")
    const [amount, setAmount] = useState("")
    const [rent, setRent] = useState(""); 
    const [receipts, setFile2] = useState("");  
    // const [biireceipts,setBillReceipt]=useState("")
    const [billreceipts, setFile] = useState("")
    
    
    const detailSubmit=(event)=>{
        event.preventDefault()
        setFile(event.target.files[0])
        const details = {bill, range,amount,rent,billreceipts, receipts }
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
        fetch("http://127.0.0.1:8000/api/tasks/", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
    let handleBillChange= (e) => {
        setBill(e.target.value)
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
                   onChange={(e) => {
                    setFile2 (e.target.value);
                }
                }
                         ></input></div>
            <div className='billName'>
            <br />
            <select className='name' onChange={handleBillChange}>
            <option value=" Select the type of Bil you Pay ">Select the type of Bil you Pay</option>
            {bills.map((bill) => <option value={bill.value}>{bill.label}</option>)}
             </select>
             </div>
        

                <div className="bill">
                  <p> Upload bill Reciepts</p>
                 <input className="billReceipts"type="file" 
                    placeholder="Upload bill Reciepts" value={billreceipts} 
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
    // nvddisjgiofssg gkjgflkghjhtyyyyyyyyyyyyyy;lgx,.
}
export default Details