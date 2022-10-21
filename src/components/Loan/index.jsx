import React from 'react';
import './style.css';
import {Link} from "react-router-dom";

import pic from '../kolafit-logo.png'

function App() {

  return (
    <div className="Loan">
    
        <img src={pic} className="logo" width="80" height="80" alt="logo" />
         <h1>Loan and Credits</h1>
        <p>
        Before you get a loan, take a look at  how the  loan works. How will you repay it—monthly or all at once? 
        What are the interest costs? <br></br>  Do you have to repay a certain way (perhaps the lender requires you to pay 
        electronically through your bank account)?  Make sure you <br></br> understand what you’re getting into and how 
        everything will work before you borrow money.<br></br> 
        <br></br> 

        Get a loan that you can really handle—one that you can comfortably repay and that won’t prevent you
        from doing other important things.<br></br>  Figure out how much of your income will go toward loan repayment

        Repaying the loan on time will not only bring your credit score back up,<br></br>  but it can also help build it over
        time. In the short term, you may not be able to get another loan or open another credit card.
        </p>
       
        <Link to="/home">
                    <button className="back" type='submit' >Back</button>
        </Link>
     
    </div>
  );
}

export default App;