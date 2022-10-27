import React from "react";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ReuseForm from "../Form";
import ReuseUpdateForm from "../Updateform";
import "./style.scss"

const ReuseModal = (props) => {
    // formArr, show, closeModal ,View
    console.log("hi" + props.show)
    return (
        <>
            <Modal show={props.show} className="modal">
                <div className="form-container">
                    <Modal.Header closeButton onClick={props.closeModal}>
                        <Modal.Title>{props.titel}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >

                        {props.inputvalue ? <ReuseUpdateForm formArr={props.formArr}
                            updateData={props.updateData}
                            inputvalue={props.inputvalue} /> :
                            <ReuseForm formArr={props.formArr} data={props.data} postLink={props.postLink} />
                        }

                    </Modal.Body>
                    <Modal.Footer>

                        <Button variant="secondary"
                            onClick={props.closeModal}
                        >
                            Close
                        </Button>
                    </Modal.Footer>
                </div>
            </Modal>
        </>
    )
}

export default ReuseModal;