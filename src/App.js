import Navbar from "./Navbar"
import Pricing from "./components/Pricing"
import Home from "./components/Home"
import About from "./components/About"
import Services from "./components/Services"
import Blog from "./components/Blog"
import  { Route, Routes } from "react-router-dom"
import Contact from "./components/Contact"
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import React from "react"


 



function App() {
  return ( 
    <>
        <Navbar />
        <div className="container">
        <Routes>
          <Route path="/" element= {<Home />}  />
          <Route path="/pricing" element= {<Pricing />} />
          <Route path="/about" element= {<About />} />
          <Route path="/blog" element= {<Blog />} />
          <Route path="/services" element= {<Services />} />
          <Route path="/contact" element= {<Contact />} />
        </Routes>
         <Footer />
      </div>
    </>
  )
}

export default App
