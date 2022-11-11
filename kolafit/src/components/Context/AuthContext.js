import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useRevalidator } from "react-router-dom";
// import { Axios } from "axios";
// import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
    const [authTokens, setAuthTokens] = useState(() =>
        localStorage.getItem("authTokens")
            ? JSON.parse(localStorage.getItem("authTokens"))
            : null
    );
    const [user, setUser] = useState(() =>
        localStorage.getItem("authTokens")
            ? jwt_decode(localStorage.getItem("authTokens"))
            : null
    );
    const [loading, setLoading] = useState(true);

    // const navigate = useNavigate();


    const registerUser = async ({ first_name,last_name, gender, email, password , confirm_password}) => {

        const det = {
            "first_name": first_name,
            "last_name": last_name,
            "gender": gender,
            "email": email,
            "password": password,
            "confirm_password": confirm_password
        }
        console.log(det)

        const response = await fetch( "https://frozen-mesa-94052.herokuapp.com/api/signup/",user, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(det)
        });
        if (response.status === 201) {
            // response.save(det)
            console.log(response)
            
            // navigate("/login");
        } else {
            alert("Something went wrong!");
        }
    };



    // const loginUser = async ({ email, password }) => {

    //     const log = {
    //         "email": email,
    //         "password": password
    //     }
    //     console.log(log)
    //     const response = await fetch("http://127.0.0.1:8000/api/login/", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(log)
    //     });
    //     const data = await response.json();

    //     if (response.status === 200) {
    //         setAuthTokens(data);
    //         setUser(jwt_decode(data.access));
    //         localStorage.setItem("authTokens", JSON.stringify(data));
    //         navigate("/");
    //     } else {
    //         alert("Something went wrong!");
    //     }}
        //     const response = await fetch("https://rocky-waters-56466.herokuapp.com/api/signup", {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify({
        //             email,
        //             password
        //         })
        //     });
        //     const data = await response.json();

        //     if (response.status === 200) {
        //         setAuthTokens(data);
        //         setUser(jwt_decode(data.access));
        //         localStorage.setItem("authTokens", JSON.stringify(data));
        //         navigate("/");
        //     } else {
        //         alert("Something went wrong!");
        //     }
        // };

    

        // const logoutUser = () => {
        //     setAuthTokens(null);
        //     setUser(null);
        //     localStorage.removeItem("authTokens");
        //     navigate("/");
        // };

        const contextData = {
            user,
            setUser,
            authTokens,
            setAuthTokens,
            registerUser,
            // loginUser,
            // logoutUser
        };

        useEffect(() => {
            if (authTokens) {
                setUser(jwt_decode(authTokens.access));
            }
            setLoading(false);
        }, [authTokens, loading]);

        return (
            <AuthContext.Provider value={contextData}>
                {loading ? null : children}
            </AuthContext.Provider>
        );
        }