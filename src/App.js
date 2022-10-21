import "./App.css";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Signup from "./components/SignUp";
import Login from "./components/Login";
import Details from "./components/Details";
import LandingPage from "./components/Home/Landingpage";
import Loan from "./components/Loan";

// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/home" element={ <LandingPage/> }/>
       <Route path="/signup" element={<Signup/>} component= {<Signup/>}/>
       <Route path="/details" element={ <Details/> }/>
       <Route path="/loan" element={ <Loan/> }/>

        <Route path="/login" element={<Login/>} component= {<Login/>}/>
      </Routes>
    </Router>
  </div>

     
  );
}

export default App;