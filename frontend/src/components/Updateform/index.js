import { React, useState } from "react";
import { Button } from "react-bootstrap";

import Form from 'react-bootstrap/Form';
const ReuseUpdateForm = (props) => {
    const { formArr, inputvalue, updateData } = props;
    const [file, setFile] = useState({ preview: '', data: '' })
    console.log(file)

    console.log(inputvalue)
    console.log(formArr);
    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        if (file) {
            formData.set('file', file.data);
        }
        console.log(formData)
        console.log(formData.data)
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
        <Form onSubmit={handleSubmit}>

            {formArr.map(({ name, type, label }) => (
                <>
                    <div className="input-group">
                        <input
                            type={type}
                            name={name}
                            id={name}
                            defaultValue={inputvalue[name]}
                            onChange={handleFileChange}
                        />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>{label}</label>
                    </div>
                </>
            ))}
            <Button className="sbutton" variant="primary" type="submit">
                Update
            </Button>

        </Form>
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