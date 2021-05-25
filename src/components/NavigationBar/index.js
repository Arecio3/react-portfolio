import React from 'react';
import resume from './Resume.pdf'
import './style.css'

function NavigationBar({  handlePageChange, currentPage }) {
  return (
    
      <nav className='nav-bar'>
          <a href="#home" onClick={() => handlePageChange('Home')} className={currentPage === 'Home'}>Home</a>
          <a href="#work" onClick={() => handlePageChange('Work')} className={currentPage === 'Work'}>Work</a>
          <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact'}>Contact</a>
          <a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About'}>About</a>
          <a href={resume}>Resume</a>
      </nav>
    
  );
}


export default NavigationBar
