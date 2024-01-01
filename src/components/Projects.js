import {React, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import projectElements from '../assets/projectElements'
import { FaGithub } from 'react-icons/fa';
import civicConnect from '../images/civicconnect.jpg'
import { Reveal } from './Reveal'

export default function Projects() {
  const imageList = [0, 0, 0, 0, 0, civicConnect, 0, 0];
  const [stateArray, setArray] = useState([false, 0]);
  const [booleanValue, IDValue] = stateArray;

  const infoVariant = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    }
  }

  return (
    <div id='projects' className='projectContainer'>
        <h1>Some Of My Projects</h1>
        <div className='projectGrid'>
          {projectElements.map(element => {
            return <div className='projectElement'>
              <AnimatePresence>
                <motion.div
                transition={{ layout: { duration:'1', type:'spring'} }}
                  key={element.id}
                  layout='test'
                  onClick={()=> setArray([!booleanValue, element.id])}
                  style={{ backgroundColor:'transparent', borderRadius: '2rem' }}
                >
                  {(!booleanValue || (IDValue !== element.id)) && 
                    <Reveal overflowVal='visible'>
                    <motion.div
                      whileHover={{ scale:1.05, boxShadow: '0 0 55px rgba(0, 0, 0, 0.2)' }}
                      transition={{ type:'spring', stiffness: 400}}
                      style={{ backgroundColor:'transparent', borderRadius: '2rem', position: 'relative'}}
                    >
                      <div className='projectImageDiv'>
                        <img className='projectImage' src={imageList[element.id]} alt={element.title}/>
                      </div>
                    </motion.div>
                    </Reveal>
                  }
                  {(booleanValue && (IDValue === element.id)) && (
                    <motion.div className='projectExpandedView'
                      layout="position"
                    >
                      <div className='project2ndImageDiv'>
                          <img className='projectImage' src={imageList[element.id]} alt={element.title}/>
                      </div>
                      <div className='projectExpandedViewText'>
                        <div>
                          <h3>{element.title}</h3>
                        </div>
                        <div>
                          {element.description}
                        </div>
                        <div className='elementProjectTech'>
                  {element.tech.map((tech, index) => {
                    return <span className='eachElementProjectTech' key={index}>{tech}</span>;
                  })}
                </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              
              <motion.div
                transition={{ duration:0}}
                variants={infoVariant}
                initial='visible'
                animate={!booleanValue || (IDValue !== element.id) ? 'visible':'hidden'}
                style={{ backgroundColor: 'transparent'}}
              >
              <div className='projectInfo'>
                <div className='projectName'>
                  {element.title}
                </div>
                <div className='elementProjectTech'>
                  {element.tech.map((tech, index) => {
                    return <span className='eachElementProjectTech' key={index}>{tech}</span>;
                  })}
                </div>
                <a href={element.github} className='githubLink' target='_blank' rel='noopener noreferrer'><FaGithub className='githubIcon'/></a>
              </div>
              </motion.div>
              </AnimatePresence>
            </div>
          })}
        </div>
    </div>
  )
}
