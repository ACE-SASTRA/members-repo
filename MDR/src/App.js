import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import About from './components/About.js'
import Home from './components/Home.js'
import Contact from './components/Contact.js'
function App() {
  return (
    <Router>
      <div className="Top">
        <nav className="MenuBar">
          <ul className="MenuList">
          <li className="MenuItem"><Link to="/">Home</Link></li>
          <li className="MenuItem"><Link to="/about">About</Link></li>
          <li className="MenuItem"><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
       
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
