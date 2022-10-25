import "./App.css";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Signup from "./components/SignUp";
import Login from "./components/Login";
import Landingpage from "./components/Landingpage";
// import HomeScreen from "./components/HomeScreen";
// import HomeScreen from "./components/HomeScreen";
// import HomeScreen from "./components/HomeScreen";
// import HomeScreen from "./components/HomeScreen";
import UploadDetails from "./components/UploadDetails";
import Details from "./components/Details";
import Financialeducation from "./components/Financialeducation";
import Final from "./components/Final";
import Home from "./components/Home"

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage/>}/>
       <Route path="/signup" element={<Signup/>} component= {<Signup/>}/>
        <Route path="/login" element={<Login/>} component= {<Login/>}/>
        <Route path="/home" element={<Home/>} component= {<Home/>}/>
        <Route path="/uploadetails" element={<UploadDetails/>} component= {<UploadDetails/>}/>
        <Route path="/details" element={<Details/>} component= {<Details/>}/>
        <Route path="/financialeducation" element={<Financialeducation/>} component= {<Financialeducation/>}/>
        <Route path="/final" element={ <Final/> }/>

      
      </Routes>
    </Router>
  </div>
  );
}
export default App;