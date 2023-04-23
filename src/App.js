import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alerts from './components/Alerts';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

function App() {

  const toggleMode = ()=>{
    if(mode === "dark"){
      changeMode("light");
      changeButtonState("Dark Mode");
      document.body.style.backgroundColor = 'white';
      toggleAlert("success", "Light Mode enabled successfully");
    }
    else{
      changeMode("dark");
      changeButtonState("Light Mode");
      document.body.style.backgroundColor = 'black';
      toggleAlert("success", "Dark Mode enabled successfully");
    }
  }

  const toggleAlert = (type, message)=>{
    changeAlert({type : type, msg : message})
    setTimeout(() => {
      changeAlert(null);
    }, 1500)
  }

  const [mode, changeMode] = useState("light")
  const [buttonState, changeButtonState] = useState("Dark Mode");
  const [alert, changeAlert] = useState(null);
  
  return (
    <>
    <Router>    
    <Navbar title = "Text Modifier" primary_Heading = "Home" secondary_Heading = "About" mode = {mode} toggleMode = {toggleMode} buttonState = {buttonState}></Navbar>
    <Alerts alert = {alert}></Alerts>
    <div className={`container text-${mode === 'light' ? 'dark' : 'light'}`}>
      <Switch>
        <Route exact path='/about' element={<About mode = {mode}></About>}></Route>
        <Route exact path='/' element={<TextForm heading1 = "Enter the text you want to modify" heading2 = "Your results are as below" mode = {mode} toggleAlert = {toggleAlert}></TextForm>}></Route>
      </Switch>
    </div>
    </Router>
    </>
  );
}
export default App;