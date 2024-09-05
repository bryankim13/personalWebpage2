import React from 'react'
import { Reveal } from './RevealAnimation.js'
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
                <Reveal>
                <div className='imageDiv'>
                    <img className='aboutImage' src={ProfilePic} alt='profileImage'/>
                </div>
                </Reveal>
                <Reveal>
                <div className='aboutDesc'>
                    <p>Regardless if it rains on a photoshoot, or if I'm exhausted during a workout, I strive to
                        give my 100% and make the most out of the situation. Thats the mindset I carry with me
                        wherever I go.
                    </p>
                    <br></br>
                    <p>
                        Im a <b>Software Engineer</b> that has worked with <b>Monolithic codebases</b>, <b>microservices</b>, <b>REST api's</b> and more.
                        I value communcation just as much as being able to deliever complex solutions. Regardless
                        of the technologies in play, I learn to adapt to bring the best results.
                    </p>
                </div>
                </Reveal>
            </div>
        </div>
    </div>
  )
}
