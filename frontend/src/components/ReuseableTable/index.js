import React from "react";
import moment from "moment";
import { BsDashCircleFill, BsPencil, BsEyeFill } from "react-icons/bs";
import { Table, Button } from 'react-bootstrap';


const ReuseTable = (props) => {
    const deleteData = props.deleteData;
    const getOne = props.getOne;
    const getOneDetails = props.getOneDetails;
    const head = props.Header;
    const data = props.data;

    console.log(data);
    head.map((e) => console.log(e.feild))


    const getCaps = (str) => {
        // Split the string at all space characters
        return str.split(' ')
            // get rid of any extra spaces using trim
            .map(a => a.trim())
            // Convert first char to upper case for each word
            .map(a => a[0].toUpperCase() + a.substring(1))
            // Join all the strings back together
            .join(" ")
    }
    const FormateDate = (date) => {
        if (date) {
            return moment(date).format("MMM DD YYYY");
        } else {
            return null
        }

    }
    const Delete = (id) => {
        console.log("hi")
        console.log(id);
        if (window.confirm("Are you Sure to Detele this??")) {
            deleteData(id)
        }
    }
    const View = (id) => {
        console.log("hello " + id);
        if (id) (getOneDetails(id))
    }
    const Update = (id) => {
        getOne(id)
        console.log(id)
    }
    {
        data.map((row) => (
            console.log(row.billable)
        ))
    }

    return (
        <>
            <Table striped hover>
                <thead className="table-primary">
                    <tr>
                        {head.map((eachhead) => {
                            return (
                                <th>{getCaps(eachhead.header)}</th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {data &&
                        data.map((row) => (
                            <tr>
                                {head.map((col) => (
                                    <>
                                        {col.field === "Actions" ?
                                            <td>
                                                <Button variant="success" onClick={() => { View(row._id) }}><BsEyeFill /></Button>
                                                <Button variant="warning" onClick={() => { Update(row._id) }}><BsPencil /></Button>
                                                <Button variant="danger" onClick={() => { Delete(row._id) }}><BsDashCircleFill /></Button>
                                            </td>
                                            :
                                            <td>
                                                {col.header === "Start Date" || col.header === "End Date" || col.header === "Date" ?
                                                    FormateDate(row[col.field])
                                                    : <>
                                                        {col.header === "billable" ?
                                                            <>{row.billable ? "Yes" : "No"}</>
                                                            :
                                                            <>{getCaps(row[col.field])}</>
                                                        }
                                                    </>
                                                }
                                            </td>
                                        }
                                    </>
                                ))}
                            </tr>
                        ))}
                </tbody>
            </Table>
        </>)

}

export default ReuseTable;