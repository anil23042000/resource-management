import { isDate } from "moment";
import React from "react";
import { Button, Table } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import moment from "moment";
import "./style.scss"



const ReadFile = (props) => {
    const data = props.data
    const show = props.show
    console.log(data)
    console.log(show)
    let head = data[0];
    let databody = [];
    console.log(databody)

    console.log(head)
    const FormateDate = (date) => {
        console.log(date)
        if (date) {
            console.log(moment(date).format("MMM DD YYYY"))
            return moment(date).format("MMM DD YYYY");
        } else {
            return null
        }

    }
    const getCaps = (str) => {
        return str
            .replace(/\s(.)/g, function (a) {
                return a.toUpperCase();
            })
            .replace(/\s/g, ' ')
            .replace(/^(.)/, function (b) {
                return b.toLowerCase();
            });
    }
    for (let i = 0; i < data.length; i++) {
        if (i > 0) {
            databody.push(data[i]);
        }
    }
    return (
        <>
            <Modal show={show} aria-labelledby="example-modal-sizes-title-lg" size="lg">
                <Modal.Header closeButton onClick={props.closeView}>
                    <Modal.Title >{props.titel}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table responsive>
                        <thead>
                            <tr>
                                {head.map((val, i) => {
                                    return (<th>{head[i]}</th>)
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {databody.map((items, index) => {
                                return (
                                    <tr>
                                        {items.map((subItems, sIndex) => {
                                            return (subItems instanceof Date && !isNaN(subItems) ? <td>{FormateDate(subItems)}</td>
                                                : <td>{subItems}</td>);
                                        })}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary"
                        onClick={props.closeView}
                    >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )

}


export default ReadFile;