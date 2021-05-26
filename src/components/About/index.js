import React from 'react'
import selfie from '../../images/selfie.jpeg'
import ProgressBar from '../Progress/ProgressBar'
import './style.css'


const About = () => {
    return (
        <article className='bio'>
            <h1 className='aboutMeHeader'>About Me;</h1>
            <div id='bioContent'>
                <img src={selfie}></img>
                <div id="biography">
                    <h1 className='bioHead'>Bio</h1>
                    <p>My name is <span>Arecio Canton</span>,  <br /> I'm striving to become a <span>full-stack developer</span> and my ultimate goal is to be able to work with Artificial Intelligence </p>
                    <ProgressBar />
                </div>
            </div>

        </article>

    )
}

export default About
