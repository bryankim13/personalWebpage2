import React from 'react'
import { Reveal } from './Reveal.js'
import ProfilePic from '../images/about.jpg'
import {FaGraduationCap, FaBriefcase} from 'react-icons/fa'

export default function About() {
  return (
    <div id='about' className='aboutSection'>
        <Reveal overflowVal='visible'>
            <h1>
                About Me
            </h1>
        </Reveal>
        <div className='aboutContainer'>
            <Reveal>
            <div className='imageDiv' >
                <img className='aboutImage' src={ProfilePic} alt='profileImage'/>
            </div>
            </Reveal>
            <div className='aboutDetails'>
                <div className='aboutDetailContainers'>
                    <Reveal>
                    <div className='aboutDetailContainer'>
                        <div className='aboutIcon'>
                            <FaBriefcase/>
                        </div>
                        <h3>Experience</h3>
                        <p>2 Years <br />Software Development</p>
                    </div>
                    </Reveal>
                    <Reveal>
                    <div className='aboutDetailContainer'>
                        <div className='aboutIcon'>
                        <FaGraduationCap/>
                        </div>
                        <h3>Education</h3>
                        <p>B.Sc. Bachelors Degree of Computer Science<br /> University of Virginia</p>
                    </div>
                    </Reveal>
                </div>
                <div className='aboutMessage'>
                    <Reveal overflowVal='visible'>
                    <p>
                        Welcome! I'm the guy who camped over <em>24 hours</em> outside a Microcenter for an 3070 GPU, how are you? While gaming has a huge place in my heart, I love to 
                        experiment with <em>cooking</em>, take artsy <em>photography</em> and am willing to try anything that won't kill me.
                    </p>
                    </Reveal>
                    <Reveal overflowVal='visible'>
                    <p>
                        I'm currently a Software Engineer II at <em>Appian</em>, currently building features and doing operational work on their Portal microservice.
                        I also had recently graduated from <em>University of Virginia</em> with a bachelors degree in
                        Computer Science with a <em>3.67</em> GPA. 
                    </p>
                    </Reveal>
                    <Reveal overflowVal='visible'>
                    <p>From all the projects and internships I experienced, from failures to successes, I can confidently say that I'm an efficient
                        learner that always strives to produce the best work possible. ヽ(；▽；)ノ
                    </p>
                    </Reveal>
                </div>
            </div>
        </div>
    </div>
  )
}
