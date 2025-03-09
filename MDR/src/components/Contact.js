import React from 'react'
import './components.css'
import { FaLinkedin, FaInstagram, FaGithub} from 'react-icons/fa';
export default function Contact(){
    return(
       <div>
            <div className="Contact">
                <h1 className='Heading'>MDR on Social Media</h1>
                <div className='Icon-Arrange'>
                    <a href="https://www.instagram.com/md.r_04/?igsh=bmlxYWcxMnY5dHc%3D"
                        target="_blank" rel="noopener noreferrer">
                            <FaInstagram className='Icon'/>
                    </a>
                    <a href= " https://www.linkedin.com/in/mohamed-rizvi-019a06300/ "
                        target="_blank" rel="noopenner noreferrer">
                            <FaLinkedin className='Icon'/>        
                    </a> 
                    <a href='https://github.com/Mdr0405'
                        target='_blank' rel='noopenner noreferrer'>
                            <FaGithub className='Icon'/>
                    </a>
                </div>
            </div>
            <div className='Detail-Contact'>
                <h2>Get In Touch WithMe</h2>
            </div>
            
       </div>
        
    );
}