import React from "react";
import './components.css'
import logo from './logo.svg'
export default function Home(){
    return(
        <div className="App" >
            <img src={logo} className="Logo" alt="logo"></img>
            <p className="Intro">"Hi! I'm Mohamed Rizvi — a passionate coder and mathematician who loves exploring and shaping the internet world with innovative ideas. 
                Let's build something amazing together!"</p>
            <p className="New">Welcome to My PortFolio</p>
       </div>
    );
}