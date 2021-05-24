import React from "react";
import { Progress } from 'reactstrap';
const ProgressBar = () => {
  return (
    <div>
      <div className="mt-3 text-center">React</div>
      <Progress animated value={35}/>

      <div className="mt-3 text-center">JavaScript</div>
      <Progress animated value={45} />

      <div className="mt-3 text-center">HTML</div>
      <Progress animated value={75} />

      <div className="mt-3 text-center">CSS</div>
      <Progress animated value={55} />

      <div className="mt-3 text-center">mySQL</div>
      <Progress animated value={50} />
    </div>
  );
};

export default ProgressBar;
