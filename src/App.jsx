import {Routes, Route } from "react-router";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Details from "./components/Details/Details";
import './index.css';
import LogIn from "./components/LogIn/LogIn";
import Register from "./components/Register/Register";
import { useState } from "react";

// const BASE_URL = 'https://clothing-store-9888e-default-rtdb.europe-west1.firebasedatabase.app/users.json';

function App() {

  const [userProfil, setUserProfil] = useState({});

  const loginHandler = (user) => {
    setUserProfil(user) 
  }


  return (
    <>
    <Header user={userProfil} />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/products" element={<Products />}/>
      <Route path="/items/:itemId/details" element={<Details />}/>
      <Route path="/login" element={<LogIn onLogin={loginHandler} />}/>
      <Route path="/register" element={<Register />}/>
    </Routes>

    </>
  )
}

export default App