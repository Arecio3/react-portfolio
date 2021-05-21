import React from 'react'
import src from '../../images/background.jpg'
import './style.css'

const HeroImg = () => {
    return (
        // eslint-disable-next-line
        <img className='hero' src={src} alt='sky image'></img>
    )
}

export default HeroImg
