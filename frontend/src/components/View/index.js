import React from "react";
import { Button, Modal } from "react-bootstrap";
import moment from "moment";

const ReuseView = (props) => {
    console.log(props.data);
    console.log(props.shows)
    const data = props.data;
    const formArr = props.formArr;
    console.log(data)

    const FormateDate = (date) => {
        if (date) {
            return moment(date).format("MMM DD YYYY");
        } else {
            return null
        }
    }

    return (
        <>
            <div class="modal-dialog modal-dialog-scrollable">
                <Modal show={props.shows} >
                    <Modal.Header closeButton onClick={props.closeView}>
                        <Modal.Title>{props.titel}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        {formArr.map(({ name, type, label }) => (
                            <>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>{label}</label> 
                                    </div>
                                    <div className="col-md-6">
                                       : <strong>{label === "Start Date" || label === "End Date" ?
                                            <>{FormateDate(data[name])}</> :
                                            <>
                                                {data[name]}</>
                                        }
                                        </strong><br />
                                    </div>
                                </div>
                            </>
                        ))}

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary"
                            onClick={props.closeView}
                        >
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        </>
    )

}

export default ReuseView