import React from 'react';
import './style.css';
import axios from 'axios'
import { useState } from 'react';
import {Link, Navigate} from "react-router-dom";

const Details = () => {
 

 const [location, setLocation] = useState("");
 const [id_number, setId_Number] = useState("");
 const [id_picture, setId_Picture] = useState ("");  


 const submitting = (event) => {
    event.preventDefault()
    const user= { location, id_number, id_picture} 
    console.log("user",user);
    if (location && id_number && id_picture) {
      axios.post("http://fierce-hollows-95496.herokuapp.com/api/identification/", user)
        .then(res => {
          console.log(res)
        //   toast("Successful")
          Navigate("/uploadetails")
       
        })
        .catch(error => {
          console.log(error)
        //   toast("try again")
    
        })
    }
    else {
      console.log(user)
    //   alert("invalid input")



      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: JSON.stringify(user),
 
 
          redirect: 'Details'
      };
    };

 
     }
     return(
       
         <div className="details">
              <div className="pic">
         </div>
         <div className='fill'>
          <form onSubmit={submitting}>
                 <label>
                
                     <div className="location">
                         <input className="container"
                             type="text"
                             placeholder="Location"
                             value={location}
                             onChange={(e) => {
                                 setLocation(e.target.value)
                             }}
                         ></input></div>
                     <div className="Id">
                         <input className="container"
                             type="text"
                             placeholder="Id number"
                             value={id_number}
                             onChange={(e) => {
                                 setId_Number(e.target.value);
                             }
                             }
                         ></input></div>

                  <div className="Upload">
                  <p>Upload ID</p>
                 <input className="container"
                   type="file" 
                    placeholder="ID" 
                    value={id_picture} 
                   onChange={(e) => {
                    console.log("e",e.target.value);
                    setId_Picture(e.target.value);
                }
                }
                         ></input></div>
                
                
                 </label>
                 <div className='But'>
                 <Link to="/">
                 <button className="previous" type='submit' >Back</button>
                 </Link>
                 <Link to = "/uploadetails">
                 <button className="proceed" type='submit' >Proceed</button>
                 </Link>
                 </div>
             </form>
          
         </div>


     </div>
     )
};
export default Details;

 

  
  
 