import React from 'react';
import './style.css';
import { useState } from 'react';
// import pic from "../Kolaa.png"
// import './App'
import {Link} from "react-router-dom";
const Details = () => {
 const [location, setLocation] = useState("");
 const [id_number, setId_Number] = useState("");
//  const [upload, setUpload_ID] = useState("");
 const [upload, setFile] = useState()





 const submitting = (event) => {
     event.preventDefault()
   setFile(event.target.files[0])
 
     const user = {location, id_number, upload, }
     var myHeaders = new Headers();
     myHeaders.append("Content-Type", "application/json");
     const requestOptions = {
         method: 'POST',
         headers: myHeaders,
         body: JSON.stringify(
             user
         ),
         redirect: 'Details'
     };
     
     }
     return(
       
         <div className="details">
              <div className="pic">
             {/* <img src={pic} alt="logo" width="60" height="60"></img> */}
         </div>
         <div className='fill'>
          <form onSubmit={submitting}>
                 <label>
                     <div className="location">
                         <input className="container"
                             type="text"
                             placeholder="Enter your location"
                             value={location}
                             onChange={(e) => {
                                 setLocation(e.target.value)
                             }}
                         ></input></div>
                     <div className="Id">
                         <input className="container"
                             type="text"
                             placeholder="ID Number"
                             value={id_number}
                             onChange={(e) => {
                                 setId_Number(e.target.value);
                             }
                             }
                         ></input></div>

                  <div className="Upload">
                  <p>Upload ID</p>
                 <input className="container"type="file" 
                    placeholder="Upload ID" value={upload} 
                   onChange={(e) => {
                    setFile (e.target.value);
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