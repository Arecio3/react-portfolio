import React from "react";
import "./style.css";

const Contact = () => {
  return (
    <div>
      <h1 className="contactHeader">Contact Me;</h1>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Message
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Enter text"
        ></textarea>
      </div>
      <button className='btn btn-primary' value='submit' onClick='mailto:cuba289@gmail.com'>Submit</button>
    </div>
  );
};

export default Contact;
