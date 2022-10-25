import React from "react";
import {Link} from 'react-router-dom'

function HomeScreen (){
    return(
        <div>
            <Link path to="/Uploadetails">
            <button> Upload details</button>
            </Link>
        </div>
    )
}
export default HomeScreen