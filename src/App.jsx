import { Routes, Route, useNavigate } from "react-router";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Details from "./components/Details/Details";
import './index.css';
import LogIn from "./components/LogIn/LogIn";
import Register from "./components/Register/Register";
import { useEffect, useState } from "react";
import Profile from "./components/Profile/Profile";

// const BASE_URL = 'https://clothing-store-9888e-default-rtdb.europe-west1.firebasedatabase.app/users.json';

function App() {
  const navigate = useNavigate();

  const [userProfil, setUserProfil] = useState(null);

    const loginHandler = (user) => {
      setUserProfil(user)      
      navigate("/")
    }

  const logOutHandler = () => {
    setUserProfil(null);
    navigate("/"); 
  };

  return (
    <>
      <Header user={userProfil} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/items/:itemId/details" element={<Details />} />
        <Route path="/login" element={<LogIn onLogin={loginHandler} />} />
        <Route path="/register" element={<Register onRegister={loginHandler}/>} />
        <Route path="/profile" element={<Profile user={userProfil} onLogOut={logOutHandler} />} />
      </Routes>

    </>
  )
}

export default App