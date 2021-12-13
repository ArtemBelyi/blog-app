import React from 'react';
import { Modal, Button } from 'react-bootstrap';

interface DataModal {
    dataModal: {
        show: boolean,
        handleClose: Function,
        heading: string,
        body: string
    }
}

const ModalWindow = (props: DataModal) => {
    const { show, handleClose, heading, body} = props.dataModal
    return (
        <>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>{heading}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{body}</Modal.Body>
            <Modal.Footer>
            <Button variant="primary" onClick={() => handleClose()}>
                Ясно
            </Button>
            </Modal.Footer>
      </Modal>
        </>
    )
}
export default ModalWindow