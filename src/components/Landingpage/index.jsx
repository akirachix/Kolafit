import React from 'react';
import './style.css';
import {Link} from "react-router-dom";
import pic from '../Kolaa.png';
import photo from '../KolaImage.png';

function App() {
return (
    <>
 <div className="Ab">
 <div className="bar">
    <div className='log'>
             <img src={pic} alt="logo" width="60" height="60"></img>
             </div>
             <div className='Start'>
         {<Link to="/signup"><p>SignUp</p></Link>}
     </div>
         </div> 
 
 </div>
 <div className='Phot'>
             <img src={photo} alt="logo" width="550" height="300"></img>
             </div>


     <div className='word'>
<div className='first-heading'>
<h2>About KolaFit</h2>
<p>KolaFit improves the creditworthiness by aggregating a customer’s data after calculating their loan eligibility <br/>
and makes the unified data available to financial  instutitons via an API.</p>
</div>
<div className='second-section'>
    <h2>Why Kolafit</h2>
    <p>A key limitation on the eligibility of many assets as collateral is information asymmetry. Owing to the inability of 
many lenders <br/>to ascertain the true ownership of assets, and reluctant to accept many assets that could serve as 
collateral. Thus this <br/>informational constraint renders many types of assets ineligible as collateral and limits access to credit.</p>
</div>
</div>
 </>
);
}
export default App;