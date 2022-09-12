import React,{ useState, useEffect } from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Discover from './Components/Discover'
import Footer from './Components/Footer'

function App() {



  return (
    <div className="App">
      <Header />
      <Hero />
      <Discover />
      <Footer />
    </div>
  )
}

export default App