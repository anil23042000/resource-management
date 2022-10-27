import { React, useForm, useState } from "react";
import { FormGroup, ControlLabel, FormControl, Button, HelpBlock, FormLabel, InputGroup } from "react-bootstrap";

import Form from 'react-bootstrap/Form';
import { useHistory } from "react-router-dom";
const ReuseUpdateForm = (props) => {
    const { formArr, inputvalue, updateData } = props;
    const [file, setFile] = useState({ preview: '', data: '' })

    console.log(inputvalue)
    console.log(formArr);


    // console.log(inputvalue._id)
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        console.log(formData)
        updateData(formData, inputvalue._id);
    };
    const handleFileChange = (e) => {
        const file = {
            preview: URL.createObjectURL(e.target.files[0]),
            data: e.target.files[0],
        }
        console.log(file)
        setFile(file)
    }
    return (
        <>
            <Form onSubmit={handleSubmit}>
                {formArr.map(({ name, type, label }) => (       
                    <>
                        <Form.Label>{label}</Form.Label>
                        <FormControl
                            type={type}
                            name={name}
                            id={name}
                            defaultValue={inputvalue[name]}
                            onChange={handleFileChange}
                        />
                    </>
                ))}
            <Button variant="primary" type="submit">
                Update
            </Button>
        </Form>
        </>
    )
}

ReuseUpdateForm.defaultProps = {

    formArr: [
        {
            label: "Email",
            name: "email",
            type: "text",
            value: ""
        },
        {
            label: "Password",
            name: "password",
            type: "password",
            value: ""
        },
    ],

};



export default ReuseUpdateForm