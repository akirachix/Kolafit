import React from 'react';  
import "../Financial Education/style.css" 



function FinancialEducation(){ 


return( 
    <div className='FinancialEducation'>  
        <h2>Financial Education</h2> 
        <div className='buttons'>
        <div className='btn-one'>
        <button className='loan'>Loan and Credits</button>
        </div> 
        <div className='btn-two'>
        <button className='eligibility'>Eligibility and Creditscoring</button>
        </div>
        </div>
    </div>
);
}; 
export default FinancialEducation; 
