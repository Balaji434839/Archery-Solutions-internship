/* eslint-disable no-unused-vars */
import React from "react";
import {  Route, Routes } from "react-router-dom";
import "./app.css";
import "./Login.css";
import "./components/Home.css"
import Productcard from "./components/Productcard";
import LoginForm from "./components/login";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import SignupForm from "./components/signup";
import Shopnow from'./components/Shopnow';

function App() {
  return (
    <>
    <Routes>
      
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignupForm/>}/>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/product" element={<Productcard />} />
      <Route path="/Shopnow" element={<Shopnow />} />
     
    
    </Routes>
    </>
  );
}

export default App;


