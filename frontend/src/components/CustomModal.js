import React, { useState } from 'react';
import { Modal, Button } from "react-bootstrap";

function CustomModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div 
      className="CustomModal"
      id={props.title.split(" ")[0]}
      style={{
        cursor: "pointer"
      }}>
      <div onClick={handleShow}>{props.title}</div>

      <Modal show={show} onHide={handleClose} className="mt-5 pt-5">
        <Modal.Header className="align-self-center border-0" >
          <Modal.Title>
            <h3>{props.title}</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.body}
        </Modal.Body>
        <Modal.Footer className="align-self-center border-0">
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CustomModal;
