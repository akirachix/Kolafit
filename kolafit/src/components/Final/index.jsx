import { useEffect, useState } from "react";
import ReactConfetti from 'react-confetti'
// const [loan_amount, setLoanAmount] = useState("");


function Final (){
  const [loan_amount, setLoanAmount] = useState("");

  useEffect(() => { 
    const loans =localStorage.getItem('loan_amount', JSON.stringify(loan_amount));
    if(loans){
      setLoanAmount(loans)
    }
   
    }, [loan_amount]); 
    

    return(
        <div>
            
              <div className="confetti-text" style={{backgroundColor:"white", marginRight:"auto",marginLeft:'auto', marginBottom:'auto', marginTop:'20%', width:"400px"}} >
            <h3 className="conf"> Congratulations,you are eligible for the {loan_amount} requested <br /> A financial institution will be reviewing  <br /> your details and get  back to you </h3> 
        
            {/* <p>{name}</p> */}

            </div>
            
            <div className="confetti" >
                <ReactConfetti/>
              
            </div>
            <div>
              {/* {eligible} */}
            </div>
          
{/* <div><h3>Thank you for trusting and using <br /> KolaFit!!. We will review your details<br /> and get  back to you </h3></div> */}
        </div>
    )
}
export default Final;