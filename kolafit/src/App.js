import "./App.css";
// import Signup from "./components/SignUp";
import Details from "./components/Details";
import Loan from "./components/Loan";
import LandingPage from "./components/Home/Landingpage";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
 <BrowserRouter>
 <Routes>
 <Route path="/home" element={ <LandingPage/> }/>
 <Route path= "/details" element= {<Details/>}/>
 <Route path= "/loans" element= {<Loan/>}/>
 <Route />
 </Routes>
 </BrowserRouter>
}

export default App;