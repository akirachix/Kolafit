import React from 'react';
import './style.css';
import {Link} from "react-router-dom";
import pick from '../Home.png'
import pick2 from '../Kolaa.png'
import pick3 from '../Ed.png'


function Home() {
return (
 <div className="Cont">
         <div className="loggo2">
             <img src={pick2} alt="logo" width="60" height="60"></img>
         </div>
         <div className="loggo3">
         {<Link to="/FinancialEducation">
           <img src={pick3} alt="logo" width="20" height="20"></img></Link>}
             <div className='Fin'>
             <p>Financial Education</p>
             </div>
            </div>
         <div className="Home">
      <h1>KolaFit</h1>
      <h4>We help you improve your credit score.</h4>
      <p>Need to check you loan eigibility? Click <span>{<Link to="/details">
     <button className="click"type='submit'>Here</button></Link>}</span></p>
      <div className="loggo">
             <img src={pick} alt="logo" width="400" height="250"></img>
         </div>
 </div>
 </div>
);
}
export default Home;