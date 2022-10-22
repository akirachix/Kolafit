import "./App.css";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Signup from "./components/SignUp";
import Login from "./components/Login";
import Landingpage from "./components/Home/Landingpage";
import Account from "./components/Home/Account";
import Education from "./components/Home/Education";
import Eligibility from "./components/Home/Eligibility";


// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/home" element={ <Landingpage/> }/>
       <Route path="/signup" element={<Signup/>} component= {<Signup/>}/>
        <Route path="/login" element={<Login/>} component= {<Login/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/educaion" element={<Education/>}/>
        <Route path="/eligibility" element={<Eligibility/>}/>
      
      </Routes>
    </Router>
  </div>

     
  );
}

export default App;