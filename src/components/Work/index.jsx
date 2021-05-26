import React from "react";
import Cards from '../Card'
import partHub from '../../images/part-dark.png'
import astroscope from '../../images/pic-1-hover.png'
import weather from '../../images/weather-dark.png'
import quiz from '../../images/quiz-dark.png'
import password from '../../images/pass-dark.png'
import scheduler from '../../images/scheduler-dark.png'
import "./style.css";

const projects = [
  {
    id: 0,
    title: "PartHub",
    img: partHub,
    description:
      "This is Parthub! This is a fullstack application where you can login, register, and logout. The site is dedicated to be a hub of the best computer parts, presented in easily understandable tables, we also are still working on the myBuilds section where the user will be able to have a list of all the parts they picked with a build score.",
    link: 'https://parthub.herokuapp.com/'
  },
  {
    id: 1,
    title: "Astroscope",
    img: astroscope,
    description:
      "This is Astroscope, a personal daily horoscope that tells you your daily horoscope description along with your lucky number,color,mood and some other cool details. Also at the bottom of the page you may notice we have a NASA section dedicated to our astronomy lovers that would like to see NASA's image of the day also with a button to their image gallery",
    link: 'https://mascarelloa.github.io/astroscope/'
  },
  {
    id: 2,
    title: "Weather App",
    img: weather,
    description:
      "The Weather App allows you to look up any valid city and comes with some crucial information needed for the daily forecast such as current temperature, wind-speed, UV Index, and humidity along with a 5 day weather forecast with the same information for each day and also you can have all the cities you have searched for saved in Local Storage",
    link: 'https://arecio3.github.io/weather-dashboard/'
  },
  {
    id: 3,
    title: "Quiz Game",
    img: quiz,
    description:
      "A timed Quiz Game that tracks your score and knocks 10 seconds away from your time for every question you get wrong, at the end of every quiz you can choose to save your highscore with entering in your intials. There's also a dedicated highscores page!",
    link: 'https://arecio3.github.io/quiz.game/'
  },
  {
    id: 4,
    title: "Password Generator",
    img: password,
    description:
      "This Password Generator asks you a set of questions for filtering the password that you would like with either caps, lowercase, numbers, or special characters.",
    link: 'https://arecio3.github.io/password-generator/'
  },
  {
    id: 5,
    title: "Day Planner",
    img: scheduler,
    description:
      "This is a daily Planner aimed for people who have a busy 9-5 schedule that would like to log their events with a color coded representation of the time thats passed,present and future time, and also haved them saved for you in the desiginated time slot.",
    link: 'https://arecio3.github.io/calendar-website/'
  },
];
function Work() {
  return (
    <div>
      <h1 className="workHeader">My Work;</h1>
      {projects.map((projects, index) => (
        <Cards projects={projects}/>
   ))}
    </div>
  );
}

export default Work;

{
  /* // <div className="container">
//   <div className="row" key={project.id}>
//     <div className="col-md-6 mt-4">
//       <button
      type="button"
      id={`pic-${index}`}
      class="btn btn-primary mainBtn"
      data-bs-toggle="modal"
      data-bs-target="#astroscopeModal"
    >
      {project.title}
    </button>
    <div
      class="modal fade"
      id="astroscopeModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-md">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="ModalLabel">
              {project.title}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <img src={project.img}></img>
          </div>
          <div className="modal-footer">
            <a
              href="https://mascarelloa.github.io/astroscope/"
              id="modal2Link"
            >
              Click here to visit website!
            </a>
            <a
              href="https://github.com/mascarelloa/astroscope"
              id="modal2Link"
            >
              Click here to visit repository!
            </a>
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div> */
}
