//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
// import 'bootstrap';
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";


//render your react application
let counter = 0; 
setInterval(()=>{
    ReactDOM.render(<Home seconds={counter} />, document.querySelector("#app"));
    counter++;  
}, 100)
