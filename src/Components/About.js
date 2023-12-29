import React from 'react'
import { Reveal } from './Reveal.js'

export default function About() {
  return (
    <div id='about' className='aboutContainer'>
        <Reveal>
        <h1>
            About Me
        </h1>
        </Reveal>

        <Reveal>
        <p>
            Welcome! I'm the guy who camped over <em>24 hours</em> outside a Microcenter for an 3070 GPU, how are you? While gaming has a huge place in my heart, I love to 
            experiment with <em>cooking</em>, take artsy <em>photography</em> and am willing to try anything that won't kill me.
        </p>
        </Reveal>
        <Reveal>
        <p>
            I'm also an aspiring Software Engineer and a 4th year at the <em>University of Virginia</em> studying
            Computer Science with a <em>3.67</em> GPA. Some Courses I have taken include <em>AI</em>, <em>Machine Learning</em>, <em>Database</em>, and <em>Computer Archecture.</em>
            This Fall, <em>Cloud Computing</em> and <em>Web Programming Languages</em> are next.
        </p>
        </Reveal>

        <p>From all the projects and internships I experienced, from failures to successes, I can confidently say that I'm an efficient
            learner that always strives to produce the best work possible. ヽ(；▽；)ノ
        </p>
    </div>
  )
}
