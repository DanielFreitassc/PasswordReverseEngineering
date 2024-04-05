import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import Section from "./components/Section/Section"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/login" element={
    <>
    <Login/>
    </>
    }/>
      <Route path="/" element={
    <>
    <Home/>
    </>
    }/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
