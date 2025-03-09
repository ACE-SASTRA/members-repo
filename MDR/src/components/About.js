import React from 'react'
import Pic from './pic2.jpg'
import './components.css'
export default function About(){
    return(
        <div className="About">
            <h1 className="Biohead">Personal Bio</h1>
            <div className="Bio-Content">
                <p>Name : Mohamed Rizvi</p>
                <p>Branch Of Study : B.Tech-ICT(II-Year)</p>
                <p>Graduating year : 2027</p>
                <p>College : SASTRA Deemed University</p>
                <p>Languages Known : C++, CoreJava, Python, JavaScript </p>
                <p>DBMS : MySQL, MongoDB</p>
                <p>Backend-Technologies : Express</p>
                <p>Projects : Tuberzstocx(using python and MySQL),</p>
                <p> FeelO5(React and MongoDB) </p>
                <p>Passion : Coding, Mathematics</p>
                <p>Hobbies : Travel, PhotoGraphy, Philosophy</p>
            </div>
            <img src={Pic} className="Photo" alt="MDR"></img>
        </div>
    );
}
