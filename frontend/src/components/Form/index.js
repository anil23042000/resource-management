import { React, useForm, useState } from "react";
import { FormGroup, ControlLabel, FormControl, Button, HelpBlock, FormLabel, InputGroup } from "react-bootstrap";
import "./form.scss";
import Form from 'react-bootstrap/Form';
import { useHistory } from "react-router-dom";
const ReuseForm = (props) => {
    const { formArr, postLink, data } = props;
    const [file, setFile] = useState({ preview: '', data: '' })
    console.log(file)
    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        if (file) {
            formData.set('file', file.data);
        }
        console.log(formData)
        console.log(formData.data)

        postLink(formData);

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
                {formArr.map(({ name, type, label, data }) => {
                    console.log(data)
                    if (data) return (
                        <>
                            <div className="input-group">
                                <select name={name} id={name}>
                                    <option>{label}</option>
                                    {data.value.map((eachData) => {
                                        return (
                                            <>
                                                <option name={name} id={name}>{eachData}</option>
                                            </>
                                        )
                                    })}
                                </select>
                                <br />



                            </div>
                        </>)
                    return <>


                        <div className="input-group">
                            <input
                                type={type}
                                name={name}
                                id={name}
                                onChange={handleFileChange}

                            />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>{label}</label>
                        </div>


                    </>
                }
                )}
                <Button className="sbutton" variant="primary" type="submit">
                    Submitt
                </Button>
            </Form>
        </>
    )
}

ReuseForm.defaultProps = {
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



export default ReuseForm