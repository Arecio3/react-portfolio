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
const projects = [
  {
      id: 0,
      title: 'PartHub',
      img: '../../images/part-dark.png',
      description: 'This is Parthub! This is a fullstack application where you can login, register, and logout. The site is dedicated to be a hub of the best computer parts, presented in easily understandable tables, we also are still working on the myBuilds section where the user will be able to have a list of all the parts they picked with a build score.'

  },
  {
      id: 1,
      title: 'Astroscope',
      img: '../../images/pic-1.png',
      description: "This is Astroscope, a personal daily horoscope that tells you your daily horoscope description along with your lucky number,color,mood and some other cool details. Also at the bottom of the page you may notice we have a NASA section dedicated to our astronomy lovers that would like to see NASA's image of the day also with a button to their image gallery"

  },
  {
      id: 2,
      title: 'Weather App',
      img: '../../images/weather-dark.png',
      description: 'The Weather App allows you to look up any valid city and comes with some crucial information needed for the daily forecast such as current temperature, wind-speed, UV Index, and humidity along with a 5 day weather forecast with the same information for each day and also you can have all the cities you have searched for saved in Local Storage'

  },
  {
      id: 3,
      title: 'Quiz Game',
      img: '../../images/quiz-dark.png',
      description: "A timed Quiz Game that tracks your score and knocks 10 seconds away from your time for every question you get wrong, at the end of every quiz you can choose to save your highscore with entering in your intials. There's also a dedicated highscores page!"

  },
  {
    id: 4,
      title: 'Password Generator',
      img: '../../images/pass-dark.png',
      description: "This Password Generator asks you a set of questions for filtering the password that you would like with either caps, lowercase, numbers, or special characters."

  },
  {
      id: 5,
      title: 'Day Planner',
      img: '../../images/scheduler-dark.png',
      description: 'This is a daily Planner aimed for people who have a busy 9-5 schedule that would like to log their events with a color coded representation of the time thats passed,present and future time, and also haved them saved for you in the desiginated time slot.'

  }
]

function App() {
  return (
    <Router>
      <Portfolio />
        <Wrapper>
          <Route exact path='/about' component={About}/> 
          <Work exact path='/work'component={Work} projects={projects}/>
          {/* <Selfie /> */}
          {/* <HeroImg /> */}
          {/* <About /> */}
          
        </Wrapper>
        <Footer />
   
    </Router>
  );
}

export default App;
