import React , {useState,useEffect} from 'react';
import HashLoader from "react-spinners/HashLoader";
import "../splashscreen/style.css"
import about from "./Group 17.png"
import logo from "./logo2.png"
// import {Link} from 'react-router-dom'
function Splashscreen(){
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        },2000);
    },[])
    return(
        <div className="splash">
        {
        loading ?
        <div className='hashloader'>
        < HashLoader   
        color={"#4460DC"}
        loading={loading}
        // cssOverride={override}
        size={130}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>
        :
        <div className='About'>
        <div className='Logo'>
        <img src={logo} alt="logo"></img>
        </div>
     
        <a href=''>SignUp</a>
        <img src={about} alt="Image"></img>
    

        <div className="aboutText">
        <h2>About KolaFit</h2>
        <p>
        KolaFit improves the creditworthiness by aggregating
        a customer's data after calculating their loan eligibility
        and makes the unified data available to financial
        instutitons via an API.
        </p>

        {/* <div className="WhyKolafit">
        <h2>Why KolaFit</h2>
        <p>
        A key limitation on the eligibility of many assets as collateral
        is information asymmetry. Owing to the inability of many
        lenders to ascertain the true ownership of assets,<br/>
         and reluctant
        to accept many assets that could serve as collateral. Thus this
        informational constraint renders many types of assets ineligible
        as collateral and limits access to credit.
        </p>
        </div> */}
        {/* <button className="button" type='submit' >SignUp</button> */}
        </div>
        </div>
        }
        </div>
)
}
export default Splashscreen












