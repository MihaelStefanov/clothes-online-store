import {Routes, Route } from "react-router";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Details from "./components/Details/Details";
import './index.css';
import LogIn from "./components/LogIn/LogIn";
function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/products" element={<Products />}/>
      <Route path="/items/:itemId/details" element={<Details />}/>
      <Route path="/login" element={<LogIn />}/>
    </Routes>

    </>
  )
}

export default App