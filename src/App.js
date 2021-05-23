import React from 'react';
import Wrapper from './components/Wrapper';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Header from './components/Header';
// import HeroImg from './components/HeroImg'
import Footer from './components/Footer';
import About from './components/About';
import Navigation from './components/NavigationBar';
import Home from './components/Home'
// import Selfie from './components/Selfie';
// import Projects from './components/Projects'
import './app.css';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Home />
        <Wrapper>
          <Route exact path='/' component={About}/> 
          {/* <Selfie /> */}
          {/* <HeroImg /> */}
          {/* <About /> */}
          {/* <Projects projects={Projects}/> */}
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
