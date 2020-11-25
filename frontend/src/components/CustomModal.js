import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function CustomModal({ title, body, text }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { closeButtonLabel } = require("../phrases/App.json");

  return (
    <>
      <p
        id={title.split(" ")[0].toLowerCase()}
        onClick={handleShow}
        style={{
          cursor: "pointer",
        }}
      >
        {title}
      </p>

      <Modal show={show} onHide={handleClose} className="mt-5 pt-5">
        <Modal.Header className="align-self-center border-0">
          <Modal.Title>
            <h3>{title}</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{body}</h4>
          <p>{text}</p>
        </Modal.Body>
        <Modal.Footer className="align-self-center border-0">
          <Button id="modal-close" onClick={handleClose}>
            {closeButtonLabel}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CustomModal;
