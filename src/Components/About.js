import React from 'react'
import { Reveal } from './Reveal.js'
import ProfilePic from '../images/about.jpg'

export default function About() {
  return (
    <div id='about' className='aboutSection'>
        <div className='aboutHeader'>
        <Reveal overflowVal='visible'>
                <h1>
                    About Me
                </h1>
        </Reveal>
        </div>

        <div className='aboutContainers'>
            <div className='aboutContainer'>
                <div className='imageDiv'>
                    <img className='aboutImage' src={ProfilePic} alt='profileImage'/>
                </div>
                <div className='aboutDesc'>
                    <h2>Here are some pics I've taken</h2>
                </div>
            </div>
        </div>
    </div>
  )
}
