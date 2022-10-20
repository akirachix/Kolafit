import React from 'react';
import './style.css';
// import './App.css';
// import pic from './component/Kola.png'

function App() {
  return (
    <div className="Loan">
      <header className="Kola">
        {/* <img src={pic} className="logo" alt="logo" /> */}
         <h1>Loan and Credits</h1>
        <p>
        Before you get a loan, take a look at  how the  loan works. How will you repay it—monthly or all at once? 
        What are the interest costs?  Do you have to repay a certain way (perhaps the lender requires you to pay 
        electronically through your bank account)?  Make sure you understand what you’re getting into and how 
        everything will work before you borrow money.

        Get a loan that you can really handle—one that you can comfortably repay and that won’t prevent you
        from doing other important things. Figure out how much of your income will go toward loan repayment

        Repaying the loan on time will not only bring your credit score back up, but it can also help build it over
        time. In the short term, you may not be able to get another loan or open another credit card.
        </p>
       
      </header>
    </div>
  );
}

export default App;