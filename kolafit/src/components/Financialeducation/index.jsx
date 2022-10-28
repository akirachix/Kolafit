import React from 'react';
import './style.css';
import {Link} from "react-router-dom";
// import pic from '../Kolaa.png'
function App() {
return (
 <div className="Con">
 {/* <div className="logo">
             <img src={pic} alt="logo" width="60" height="60"></img>
         </div>  */}
         <div className="Lo">
      <h1>Loan and Credits</h1>
     <p>
     Before you get a loan, take a look at  how the  loan works. How will you repay it—monthly or all at once?
     What are the interest costs?  Do you have to repay a certain way (perhaps the lender requires you to pay
     electronically through your bank account)?  Make sure you  understand what you’re getting into and how
     everything will work before you borrow money.
     <br></br>
     <br></br>
     Get a loan that you can really handle—one that you can comfortably repay and that won’t prevent you
     from doing other important things. Figure out how much of your income will go toward loan repayment
     Repaying the loan on time will not only bring your credit score back up,but it can also help build it over
     time. In the short term, you may not be able to get another loan or open another credit card.
     </p>
     <h3>Loan eligibility and credit scoring</h3>
     <p>
       Lenders often use credit scores to help them determine your credit risk. Credit scores are
       calculated based on the information in your credit report. In most cases, higher credit scores
       represent lower risk to lenders when extending new or additional credit to a consumer.
     </p>
     <h3>Importance of a  good  credit score</h3>
     <p>
       A good credit score gives you more lending options increasing your options of approval for credit cards and loans.
     </p>
 
     <Link to="/home">
     <button className="back" type='submit' >Back</button>
     </Link>
 </div>
 </div>
);
}
export default App;