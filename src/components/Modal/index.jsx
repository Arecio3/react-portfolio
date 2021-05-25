import React, { useState } from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Modals ({ projects }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
   return (
    <div>
    {projects.map((project, index) => (
      <>
        <Button
          variant="dark"
          onClick={handleShow}
          id={`pic-${index}`}
          className="modalContainer"
        >
          {project.title}
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{project.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body variant="dark">
            {project.description}
            <img className="modalPic" src={project.img}></img>
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
      </>
    ))}
  </div>
   )

   
}

export default Modals
