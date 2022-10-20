import React from 'react';
import './style.css';
import { useState } from 'react';
// import './App'
import {Link} from "react-router-dom";




const Details = () => {
    const [location, setLocation] = useState("");
    const [id_number, setId_Number] = useState("");
    const [upload, setUpload_ID] = useState("");
    const [front, setFront_ID] = useState("");
    const [back, setBack_ID] = useState("");
    


    const submitting = (event) => {
        event.preventDefault()
        const user = {location, id_number, upload, front,back }
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
        fetch("http://127.0.0.1:8000/user/", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        }

        return(

            <div className="body">
            <div>
                <form onSubmit={submitting}>
                    <label>
                        <div className="fullname">
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
                        <div className="Front">
                            <h5> </h5>
                            <input className="containerI"
                                type="text"
                                placeholder="Front ID"
                                value={front}
                                onChange={(e) => {
                                    setFront_ID(e.target.value);
                                }
                                }
                            ></input><br></br></div>
                        <div className="Back">
                            <h5> </h5>
                            <input className="containerII"
                                type="text"
                                placeholder="Back ID"
                                value={back}
                                onChange={(e) => {
                                    setBack_ID(e.target.value);
                                }
                                }
                            ></input><br></br></div>
                    </label>
                    <Link to="/home">
                    <button className="back" type='submit' >Back</button>
                    </Link>
                    <button className="proceed" type='submit' >Proceed</button>
                </form>
                

            </div>    
        </div>
        )



    
};
export default Details;