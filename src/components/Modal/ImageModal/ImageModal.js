import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";

function ImageModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      centered
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Body>
        <img src={props.img} width="100%" height="50%" alt="Selected Image" />
      </Modal.Body>

      <Modal.Footer className="border-0"></Modal.Footer>
    </Modal>
  );
}

export default ImageModal;
