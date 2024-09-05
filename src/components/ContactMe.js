import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaSpotify, FaEnvelope, FaCamera} from 'react-icons/fa';

export default function ContactMe() {
  return (
    <div id='contact' className='contactMeContainer'>
        <div className="contactMeHeading">
          <h1 style={{float: "left"}} className="contactName">Contact Me</h1>
        </div>
        <div className='contactMeText'>
          <p>
            <a href="mailto:bryankim13173@gmail.com"><FaEnvelope/></a>Email: Bryankim13173@gmail.com
          </p>
        </div>
        <div className='text'>
          <p>Or find me at your favorite app below:</p>
          </div>
        <ul className = "socials">
          <li className = "socList">
            <a href="https://github.com/bryankim13"><FaGithub className='contactGithub'/></a>
          </li>
          <li className = "socList">
            <a href="https://www.linkedin.com/in/bryankim13173"><FaLinkedin className='contactLinkedin'/></a>
          </li>
          <li className = "socList">
            <a href="https://www.instagram.com/bryannnooo/"><FaInstagram className='contactInstagram'/></a>
          </li>
          <li className = "socList">
            <a href="https://open.spotify.com/user/12166100041?si=3527a4ed349245da"><FaSpotify className='contactSpotify'/></a>
          </li>
          <li className = "socList">
            <a href="https://www.instagram.com/bryantakesphot0s/"><FaCamera className='contactCamera'/></a>
          </li>
        </ul>
    </div>
  )
}
