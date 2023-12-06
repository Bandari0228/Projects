import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./login.js";
import Signup from "./signup.js"
import Homepage from "./home.js";
import Navbar from "./navbar.js";


const App = () => {
  return (
    <>
     
      <Routes> 
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/navbar" element={<Navbar />} />
      


      </Routes>

        <Link to="/login" /> 
        <Link to="/signup" />
      
      
     
    
    </>
  );
};

export default App;


