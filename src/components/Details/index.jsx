import React from 'react';
import './style.css';
import { useState } from 'react';
import pic from "../kolafit-logo.png"
// import './App'
import {Link} from "react-router-dom";




const Details = () => {
    const [location, setLocation] = useState("");
    const [id_number, setId_Number] = useState("");
    const [upload, setUpload_ID] = useState("");
   


    const submitting = (event) => {
        event.preventDefault()
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
                <img src={pic} alt="logo" width="60" height="60"></img>
            </div> 



            <div className='form'>
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
                            <h5> </h5>
                            <input className="container"
                                type="text"
                                placeholder="Upload ID"
                                value={upload}
                                onChange={(e) => {
                                    setUpload_ID (e.target.value);
                                }
                                }
                            ></input><br></br></div>
                      
                    </label>
                    <Link to="/home">
                    <button className="previous" type='submit' >Back</button>
                    </Link>
                    <Link to = "/bills">
                    <button className="proceed" type='submit' >Proceed</button>
                    </Link>
                </form>
                

            </div>    
        </div>
        )



    
};
export default Details;