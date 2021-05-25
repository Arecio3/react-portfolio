import React, { useState } from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Modals ({ projects }) {
  // state = {
  //   projects: [],
  //   open: false,
  //   selectedProject: null
  // }

  const [show, setShow] = useState(false);

  const handleClose = () =>setShow(false);
  const handleShow = () => setShow(true);


   return (
    <div>
    {projects.map((project, index) => (
      <div key={project.id}>
        <Button
          variant="dark"
          onClick={handleShow}
          id={`pic-${index}`}
          className="modalContainer"
        >
          {project.title}
        </Button>
      </div>
    ))}
       <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{projects.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body variant="dark">
            {projects.description}
            <img className="modalPic" src={projects.img}></img>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
    </div>
   )

   
}

export default Modals
