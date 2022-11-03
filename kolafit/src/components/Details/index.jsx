import React from 'react';
import './style.css';
import axios from 'axios'
import { useState } from 'react';
import {Link} from "react-router-dom";
const Details = () => {
// const [customer, setCustomer] = useState("")
 const [location, setLocation] = useState("");
 const [id_number, setId_Number] = useState("");
 const [upload_id, setFile] = useState()
 const submitting = (event) => {
    event.preventDefault()
    // setFile(event.target.files[0])
    const user= { location, id_number, upload_id,}
    if (location && id_number && upload_id) {
      axios.post("https://fierce-hollows-95496.herokuapp.com/api/identification/",user)
        .then(res => {
          console.log(res)
        })
        .catch(error => {
          console.log(error)
        })
    }
    else {
      console.log(user)
      alert("invalid input")
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
                 {/* <div className="customer">
                         <input className="container"
                             type="text"
                             placeholder="Customer"
                             value={customer}
                             onChange={(e) => {
                                 setCustomer(e.target.value)
                             }}
                         ></input></div> */}
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
                 <input className="container"type="file"
                    placeholder="ID" value={upload_id}
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

 

  
  
 