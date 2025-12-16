import {Routes, Route } from "react-router";
import Header from "./components/Header/Header";
function App() {

  return (
    <>
    <h1>My App!</h1>


    <Routes>
      <Route path="/" element={<Header />}/>
    </Routes>

    </>
  )
}

export default App
