import React from 'react';
import './style.css';
import axios from 'axios'
import { useState } from 'react';
import {Link, useNavigate} from "react-router-dom";



const Details = () => {
// const [customer, setCustomer] = useState("")
 const [location, setLocation] = useState("");
 const [id_number, setId_Number] = useState("");
 const [upload_id, setId_Picture] = useState()
 const navigate = useNavigate()


 const submitting = (event) => {
    event.preventDefault()
    // setFile(event.target.files[0])
    const user= { location, id_number, upload_id,}
    console.log("user", user)
    if (location && id_number && upload_id) {
      axios.post("https://frozen-mesa-94052.herokuapp.com/api/identification/",user)
        .then(res => {
          console.log(res)
          navigate("/uploadetails")
        })
        .catch(error => {
          console.log(error)
        })
    }
    else {
      console.log(user)
      alert("invalid input")
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "multipart/form-data");
      const requestOptions = {
          method: 'POST',
          headers: { "Content-Type": "multipart/form-data" },
          body: JSON.stringify(user),
          redirect: 'Details'
      };
    };
     }
    //  const handleImageChange = (e) => {
    //     let newData = { ...data };
    //     newData["image_url"] = e.target.files[0];
    //     setData(newData);
    // };


     return(
         <div className="details">
              <div className="pic">
         </div>
         <div className='fill'>
          <form onSubmit={submitting} enctype="multipart/form-data">
                 <label>
                
                
                     <div className="Location">
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
                             type="file"
                             placeholder="Id number"
                             value={id_number}
                             onChange={(e) => {
                                 setId_Number(e.target.value);
                             }
                             }
                         ></input></div>
                  <div className="Upload">
                  <p>Upload ID</p>
                 <input className="container"type="text"
                 name="id_picture"
                 accept="image/png, image/jpeg"
                    placeholder="ID" value={upload_id}
                   onChange={(e) => {
                    console.log("e",e.target.value);
                    setId_Picture(e.target.value);
                }
                }
                         ></input></div>
                 </label>
                 <div className='But'>
                 {/* <Link to="/"> */}
                 <button className="previous" type='submit' >Back</button>
                 {/* </Link> */}
                 {/* <Link to = "/uploadetails"> */}
                 <button className="proceed" type='submit' >Proceed</button>
                 {/* </Link> */}
                 </div>
             </form>
         </div>
     </div>
     )
};
export default Details;

 

  
  
 