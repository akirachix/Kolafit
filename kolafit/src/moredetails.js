import React, {useState,Component} from 'react'; 
import ReactDOM from 'react-dom';   
import './moredetails.css';  
import kolafit from "./kola.png";  
import moredetails from "./moredetails.png"; 





function Details(){    
    const bills = [
        { label: "Water", value:"Water"},
        { label: "Electricity", value: "Electricity" },
        { label: "All", value: "All" }
    ] 
    const billRange=[ 
        {label: "1000-1500", value:"1000-1500"}, 
        {label: "1000-1500", value:"1000-1500"}, 
        {label: "1000-1500", value:"1000-1500"},
    ] 
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
    const detailSubmit=(event)=>{  
        event.preventDefault()
        const details = {bills, billRange,loanAmount,rent }
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
    
    let handleRangeChange=(e)=>{ 
        setRange(e.target.value) 
    }   
    let handleAmountChange=(e)=>{ 
        setAmount(e.target.value)
    }   


     
    return( 
        <div className='DetailsForm'>    
            <div className='left'>  
             <div className='logo'> 
            <img src= {kolafit} alt='Logo'></img>   
            </div>  
            <div className='moredetails'>  
                <img src= {moredetails} alt='moredetails'></img>
            </div>  

             
            </div> 
        <div className='Front'>    
        <form onSubmit={detailSubmit}> 
         <label> 
            <div className="rentAmount">
                            <input className="container"
                                type="text"
                                placeholder=" Enter rent amount"
                                value={rent}
                                onChange={(e) => {
                                    setRent(e.target.value)
                                }}
                            ></input></div> 
            <div className='billName'>  
            
            <br />
            
            <select className='name' onChange={handleBillChange}> 
            <option value=" Select the type of Bil you Pay ">Select the type of Bil you Pay</option>
   
            {bills.map((bill) => <option value={bill.value}>{bill.label}</option>)}
             </select>   
              

             </div>      
             <div className='billRange'>  
             
            <br />

            <select className='name' onChange={handleRangeChange}> 
            <option value="Select your bill range "> -- Select your bill range -- </option>
   
            {billRange.map((range) => <option value={range.value}>{range.label}</option>)}
             </select>
             </div>   
             <div className='loanAmount'>  
            
            <br />

            <select className='name' onChange={handleAmountChange}> 
            <option value="Select your Loan amount "> -- Select your Loan amount -- </option>
   
            {loanAmount.map((amount) => <option value={amount.value}>{amount.label}</option>)}
            </select>   
            {/* <input type="file" onChange={this.onFileChange} />  */}
            </div>         
         
        {/* <div className='buttons'>   */}
        <button className='back' type='submit' >Back</button> 
        <button className='proceed' type='submit' onClick={detailSubmit}>Proceed</button>
        {/* </div>   */}
        </label>

        </form>    
        </div>


        </div>
    );

}
export default Details 
