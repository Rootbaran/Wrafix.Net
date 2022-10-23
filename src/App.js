import { Routes, Route, Link, NavLink } from "react-router-dom"
import Projeler from "./pages/Projeler";
import Deneme from "./pages/Deneme";
import Portfolyo from "./pages/Portfolyo";
import React,{ useState, useEffect } from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Discover from './Components/Discover'
import Footer from './Components/Footer'
import { fromJSON, root } from 'postcss';


function App() {



  return (

    <>
    <Routes>

      <Route path="/projeler" element= {<Projeler />} />

      <Route path="/portfolyo" element= {<Portfolyo />} />
      
      <Route path="/deneme" element= {<Deneme />} />

    </Routes>
      
      <div className="App">
        <Header />
        <Hero />
        <Discover />
        <Footer />
      </div></>
  )
}

export default App