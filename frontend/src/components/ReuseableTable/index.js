import React from "react";

import { Table } from 'react-bootstrap';

const ReuseTable = (props) => {
    const data = props.Header;
    console.log(data)
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        {data.map((eachhead) => {
                            return (
                                <th>{eachhead.header}</th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    </tr>
                </tbody>
            </Table>
        </>)

}

export default ReuseTable;