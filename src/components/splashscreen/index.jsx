import React , {useState,useEffect} from 'react'; 
import HashLoader from "react-spinners/HashLoader"; 
import "../splashscreen/style.css" 
import about from "./about.png"

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
        <img src={about} alt="about"></img>
          
        <div className="aboutText">  
        <h2>About KolaFit</h2> 
        <p> 
        KolaFit improves the creditworthiness by aggregating <br/>
        a customer's data after calculating their loan eligibility <br/>
        and makes the unified data available to financial <br/>
        instutitons via an API.
        </p>  
        <div className="WhyKolafit"> 
        <h2>Why KolaFit</h2> 
        <p> 
        A key limitation on the eligibility of many assets as collateral<br/>
        is information asymmetry. Owing to the inability of many<br/>
        lenders to ascertain the true ownership of assets, and reluctant <br/>
        to accept many assets that could serve as collateral. Thus this<br/>
        informational constraint renders many types of assets ineligible<br/>
        as collateral and limits access to credit.
        </p> 

        </div>
        <button className="button" type='submit' >SignUp</button>

        </div>

        </div>



        }
        </div>

)
}  
export default Splashscreen
