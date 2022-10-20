import React, { useState, useEffect } from 'react';
import HashLoader from "react-spinners/HashLoader"; 
import pic2 from "./kola.png";
import './splash.css'; 

  
const Splashscreen = () => {
  
  // Loading state 
  const [loading, setIsLoading] = useState(false);
  
  useEffect(() => { 
    setIsLoading(true) 
    setTimeout(() =>{  
      setIsLoading(false);

    },2000)
  
 
  }, []);   
  return( 
    <div className='App'>  
    {  
    loading ?  
    <HashLoader 
    size={130} 
    color={"#5460CB"}  
    align="center" 
    loading={loading} 
    marginTop="15" 
    />  
    :  

  <div className='About'>  
  <div className='picture'>
    <img className='picture'alt='user' src={pic2}></img>  
  </div> 

    <div className='Text'>
    <h3>About Kolafit</h3> 
    <p>KolaFit improves the creditworthiness by aggregating <br/>
    a customer’s data after calculating their loan eligibility<br/>
    and makes the unified data available to financial <br/>
    instutitons via an API.</p>
    <h3>Why KolaFit?</h3>
    <p>A key limitation on the eligibility of many assets as collateral <br/>
    is information asymmetry. Owing to the inability of many <br/>
    lenders to ascertain the true ownership of assets, and reluctant <br/>
    to accept many assets that could serve as collateral. Thus this <br/>
    informational constraint renders many types of assets ineligible <br/>
    as collateral and limits access to credit.</p>  

    <button className="btn"><span>SignUp</span></button>
    </div>
  </div> 


    } 

    </div>
  )
} 
export default Splashscreen; 
