import React from 'react'
import timelineElements from '../assets/timelineElements'
import {FaGraduationCap} from 'react-icons/fa'
import { FaBriefcase } from 'react-icons/fa'
import {Reveal} from './Reveal'
import AppianLogo from '../images/appian.jpg'
import PerspectaLogo from '../images/perspecta.svg'
import Noblis from '../images/noblis.jpeg'
import UVA from '../images/uva.jpeg'

export default function Timeline() {
  const imageList = [PerspectaLogo, Noblis, UVA, AppianLogo]

  return (
    <div id='timeline' className='timelineContainer'>
      <h1>My Timeline So Far...</h1>
      {timelineElements.map(element => {
        return <div key={element.id} className='timelineElem'>
          
            <div className='largeScreenIcon'>
              <div className='timelineImage'>
                <Reveal overflowVal='visible'>
                  <img className='appianLogo' src={imageList[element.id]} alt='Appian logo'/>
                </Reveal>
              </div>
              <div className='verticalLine'></div>
              <div className='timelineDate'>{element.date}</div>
              <div className='timelineIcon'>{element.icon === 'school' ? <FaGraduationCap/> : <FaBriefcase/>}</div>
            </div>
            
            <div className='timelineElementContent'>
            <Reveal overflowVal='visible'>
              <div className='elementTitle'>{element.title}</div>
              </Reveal>
              <Reveal overflowVal='visible'>
              <div className='elementLocation'>
                {element.location}{' '}
                <span className='mobileDate'>| {element.date}</span>
              </div>
              </Reveal>
              <Reveal overflowVal='visible'>
              <div className='elementDesc'>
                {element.description}
              </div>
              </Reveal>
              <div className='elementTech'>
                {element.tech.map((tech, index) => {
                  return <span className='eachElementTech' key={index}>{tech}</span>;
                })}
              </div>
            </div>


          </div>;
      })}
    </div>
  )
}
