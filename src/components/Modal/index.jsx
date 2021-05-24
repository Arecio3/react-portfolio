import React from 'react'
import Projects from './Projects'

const Modal = () => {
    return (
    <div className='container'>
        <div className="row">

        <div className="col-lg-12 mt-4">
            <button type="button" id="pic-1" className="btn btn-primary mainBtn" data-bs-toggle="modal" data-bs-target="#astroscopeModal">
                {Projects.title}
              </button>
              <div className="modal fade" id="astroscopeModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="ModalLabel">{Projects.title}</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <img src="./assets/img/pic-1.png" alt="" className="modalPic">
                      <p className="modalP">{Projects.description}</p>
                       <a href="" id="modalLink">Click here to visit repository!</a> </img>
                    </div>
                    <div className="modal-footer">
                        <a href="https://mascarelloa.github.io/astroscope/" id="modal2Link">Click here to visit website!</a>
                        <a href="https://github.com/mascarelloa/astroscope" id="modal2Link">Click here to visit repository!</a> 
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                     
                    </div>
                  </div>
                </div>
              </div>
        </div>
      </div>
      </div>
                
    )
}

export default Modal
