import React from 'react'
import src from '../../images/selfie.jpeg'
import './style.css'

const Selfie = () => {
    return (
        <div>
        <img src={src} id='selfie' alt=''></img>
        </div>
    )
}

export default Selfie
