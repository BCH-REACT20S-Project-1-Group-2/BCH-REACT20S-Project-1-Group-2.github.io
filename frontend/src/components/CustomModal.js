import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function CustomModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { closeButtonLabel } = require("../phrases/App.json");

  return (
    <>
      <p
        onClick={handleShow}
        style={{
          cursor: "pointer",
        }}
      >
        {props.title}
      </p>

      <Modal show={show} onHide={handleClose} className="mt-5 pt-5">
        <Modal.Header className="align-self-center border-0">
          <Modal.Title>
            <h3>{props.title}</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4>{props.body}</h4>
            <p>{props.text}</p>
        </Modal.Body>
        <Modal.Footer className="align-self-center border-0">
          <Button onClick={handleClose}>{closeButtonLabel}</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CustomModal;
