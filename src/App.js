import { Routes, Route, Link, NavLink } from "react-router-dom"
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

      <Route path="/projeler" element= {<projeler />} />

      <Route path="/portfolyo" element= {<portfolyo />} />
      
      <Route path="/deneme" element= {<deneme />} />

    </Routes><div className="App">
        <Header />
        <Hero />
        <Discover />
        <Footer />
      </div></>
  )
}

export default App