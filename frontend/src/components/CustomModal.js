import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "../styles/CustomModal.css";

function CustomModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="CustomModal">
      <div onClick={handleShow}>{props.title}</div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="align-self-center">
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.body}</Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CustomModal;
