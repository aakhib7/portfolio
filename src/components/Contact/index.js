import React, { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import emailjs from '@emailjs/browser'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet'
import { Marker } from 'react-leaflet'
import { Popup } from 'react-leaflet'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_qx92lwm',
                'template_705th5q',
                form.current,
                '9b35oMBeHoZQmxNqW')
            .then(
                () => {
                    alert('Message successfully sent!!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }
  return (
    <>
    <div className='container contact-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters 
                lettersClass={letterClass}
                strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                idx={15}
                />
            </h1>
            <p>
                To obtain a creative and challenging position in an organization that gives me an opportunity 
                as a fresher to learn the art of self- improvement and leadership,
                while contributing to the symbolic growth of the organization 
                with my Communicative, Technical, Innovative & Logic skills.
            </p>
            <div className='contact-form'>
                <form ref={form} onSubmit={sendEmail}>
                    <ul>
                        <li className='half'>
                            <input 
                            type="text" 
                            name='name' 
                            placeholder='Name' 
                            required/>
                        </li>
                        <li className='half'>
                            <input 
                            type="email" 
                            name='email' 
                            placeholder='Email' 
                            required/>
                        </li>
                        <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
                    </ul>
                </form>
            </div>
        
        </div>
        <div className='info-map'>
            Syed Aakhib,
            <br/>
            BTM 1st stage,
            <br/>
            Bangalore, 560029 <br/>
            India <br/>
            <span>aakhib5147@gmail.com</span>
        </div>
        {/* <div className='map-wrap'>
        <MapContainer center={[44.96366, 19.61045]} zoom={13}>
            <TileLayer url="https://www.google.co.in/maps/@12.9213088,77.6039868,16z?hl=en-GB" />
            <Marker position={[44.96366, 19.61045]}>
                <Popup>
                    Residing place
                </Popup>
            </Marker>
        </MapContainer>
        </div> */}
    </div>
    <Loader type='pacman'/>
    </>
  )
}

export default Contact