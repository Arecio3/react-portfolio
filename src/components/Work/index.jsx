import React, { useState } from "react";
import  Modal  from 'react-bootstrap/Modal'
import  Button  from 'react-bootstrap/Button'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalFooter from 'react-bootstrap/ModalFooter'
import ModalBody from 'react-bootstrap/ModalBody'
import './style.css'

function Work(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <div>
        <h1>My Work</h1>
      {props.projects.map((project, index) => (
          <>
          <Button variant="primary" onClick={handleShow} id={`pic-${index}`}>
         {project.title}
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{project.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{project.description}<img className='modalPic' src={project.img}></img></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        {/* // <div className="container">
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
        </div> */}
        </>
      ))}
    </div>
  );
}

export default Work;
