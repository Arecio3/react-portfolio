import React from 'react';
import Wrapper from './components/Wrapper';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Header from './components/Header';
// import HeroImg from './components/HeroImg'
import Footer from './components/Footer';
import About from './components/About';
import Work from './components/Work'
import Home from './components/Home'
import picture from './images/background.jpeg'
import Portfolio from './components/PortfolioContainer'

// import Selfie from './components/Selfie';

import './app.css';


function App() {
  return (
    <Router>
      <Portfolio />
        <Wrapper>
          <Route exact path='/about' component={About}/> 
          {/* <Selfie /> */}
          {/* <HeroImg /> */}
          {/* <About /> */}
          
        </Wrapper>
        <Footer />
   
    </Router>
  );
}

export default App;
