import { Link, useMatch, useResolvedPath } from "react-router-dom"
import Mage from "../src/Assets/D_logo.png"
import Univ from "./Assets/universe.jpg"
import "./styles.css"
import Topbar from "./Topbar"
//import Jumbotron from 'react-bootstrap/Jumbotron'
//import  Button  from "react-bootstrap/Button"
import React from 'react';





//<h2><span class="multiple-text">Space</span></h2>


//   <div className="container">
//<img src={Univ} className="univ" alt="" />
//<div className="centered"><h1>This is your world !</h1></div>
//</div>

export default function Navbar() {
    return (
        <>
        <Topbar />

        <div className="containy">
<img src={Univ} className="univ" alt="" />
<div className="centered">
<div className="jumbotron">
  <h1 className="display-4">Hello, This is your World! <i class='bx bxl-react'></i></h1>
  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr  />
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <p className="lead">
    <a className="btn btn-primary btn-lg" href="/" role="button">Learn more</a>
  </p>
</div>
</div>
</div>
        
        <header className="header">
        <Link to="/" className="site-title">
           <img src={Mage} className="mage" alt="" />
        </Link>
        <input className="side-menu" type="checkbox" id="side-menu"/>
        <label className="hamb" for="side-menu"><span className="hamb-line"></span></label>
    <nav className="nav">
        
        <ul className="menu">

            <CustomLink className="components" to="/">Home</CustomLink>
            <CustomLink className="components" to="/pricing">Pricing</CustomLink>
            <CustomLink className="components" to="/about">About</CustomLink>
            <li class="subnav">
                <CustomLink className="components" id="subnavbtn" to="/contact">Contact <i class="fas fa-caret-down"></i></CustomLink>
                <div className="subnav-content">
                    <a className= "menu-elem" href="/"><i class='bx bxs-envelope'> </i> Email</a>
                    <a className= "menu-elem" href="/"><i class='bx bxl-twitter' > </i> Twitter</a>
                    <a className= "menu-elem" href="/"><i class='bx bxl-facebook-circle' > </i> Facebook</a>
                    <hr className="dropdown-divider" style={{color:'white'}} />
                    <a className= "menu-elem" href="/"><i class='bx bx-mobile'> </i> Phone</a>
                </div>
            </li>
            <CustomLink className="components" to="/blog">Blog</CustomLink>
           
            <li class="subnav">
                 <CustomLink className="components" to="/services" id="subnavbtn">Services <i class="fas fa-caret-down"></i></CustomLink>
                <div className="subnav-content">
                    <a className= "menu-elem" href="/"> - Remote </a>
                    <a className= "menu-elem" href="/"> - Creation Site </a>
                    <a className= "menu-elem" href="/"> - CRUD React </a>
                </div>
            </li>
        </ul>
    </nav>
    </header>
    
  

              
       
    </>
  )
}


/*const typed = new Typed('.multiple-text', {
    strings: ['Space', 'Time', 'Money'],
    typeSpeed :100,
    backSpeed :100,
    backDelay :1000,
    loop :true
});*/




function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

