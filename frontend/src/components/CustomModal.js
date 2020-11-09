import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../styles/CustomModal.css';

function CustomModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { closeButtonLabel } = require("../phrases/App.json");

  return (
    <div className="CustomModal" id={props.title.split(' ')[0]}>
      <div onClick={handleShow}>{props.title}</div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="align-self-center">
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.body}</Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>
            {closeButtonLabel}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CustomModal;
