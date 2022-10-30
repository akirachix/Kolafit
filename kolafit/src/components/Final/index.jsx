import { useEffect, useState } from "react";
// import React {useState,useEffect}from "react";
import ReactConfetti from 'react-confetti'

function Final (){
    return(
        <div>
              <div className="confetti-text" style={{backgroundColor:"white", marginRight:"auto",marginLeft:'auto', marginBottom:'auto', marginTop:'20%', width:"400px"}} >
            <h3 style={{color: "black",marginLeft:5}}> Thank you for trusting and using KolaFit!!. We will review your details and get  back to you </h3> 
            </div>
            
            <div className="confetti" >
                <ReactConfetti/>
              
            </div>
          
{/* <div><h3>Thank you for trusting and using <br /> KolaFit!!. We will review your details<br /> and get  back to you </h3></div> */}
        </div>
    )
}
export default Final;