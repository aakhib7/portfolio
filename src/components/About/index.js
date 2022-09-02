import React, { useEffect, useState } from 'react'
import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCss3,faHtml5,faJsSquare,faReact,faPython,faGithub} from '@fortawesome/free-brands-svg-icons'

const About = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
  return (
    <>
    <div className='container about-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters 
                    lettersClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    idx={15}
                />
            </h1>
            <p>
                To obtain a creative and challenging position in an organization that gives me an opportunity 
                as a fresher to learn the art of self- improvement and leadership,
                while contributing to the symbolic growth of the organization 
                with my Communicative, Technical, Innovative & Logic skills.
            </p>
            <p>
                I'm a extrovert and a confident person with a exploring mindset. 
            </p>
            <p>
                If I need to define myself in one sentence that would be a frisky
                person, a sports fanatic, Coding enthusiast, and Tech obsessed!!!
            </p>
        </div>
        <div className='stage-cube-cont'>
            <div className='cubespinner'>
                <div className='face1'>
                    <FontAwesomeIcon icon={faPython} color="darkcyan"/>
                </div>
                <div className='face2'>
                    <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                </div>
                <div className='face3'>
                    <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                </div>
                <div className='face4'>
                    <FontAwesomeIcon icon={faReact} color="5ED4F4"/>
                </div>
                <div className='face5'>
                    <FontAwesomeIcon icon={faJsSquare} color="EFD81D"/>
                </div>
                <div className='face6'>
                    <FontAwesomeIcon icon={faGithub} color="#171515"/>
                </div>
            </div>
        </div>
    </div>
    <Loader type='pacman'/>
    </>
  )
}

export default About