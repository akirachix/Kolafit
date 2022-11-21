import { useEffect, useState } from "react";
import axios from "axios";
import ReactConfetti from 'react-confetti'


function Final (){
    const [eligibility, setEligibility] = useState({
        loan_eligibility: "",
      })
      console.log('hhhhhh')
      axios.post("https://frozen-mesa-94052.herokuapp.com/api/details/",eligibility)
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error)
        // toast('Unable to register, to try again')
      })
    const eligible = () => {
        const { loan_eligibility } = eligibility
        console.log('hhhhhh')
        if (loan_eligibility) {
          axios.get("https://frozen-mesa-94052.herokuapp.com/api/details/",eligibility)
            .then(res => {
              console.log(res)
            })
            .catch(error => {
              console.log(error)
              // toast('Unable to register, to try again')
            })
        }
        else {
          console.log(eligibility)
          alert("invalid input")
        };
      }
    return(
        <div>
            
              <div className="confetti-text" style={{backgroundColor:"white", marginRight:"auto",marginLeft:'auto', marginBottom:'auto', marginTop:'20%', width:"400px"}} >
            <h3 className="conf"> Thank you for using KolaFit!!. <br /> We will review your details  <br /> and get  back to you </h3> 
            {eligible}

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