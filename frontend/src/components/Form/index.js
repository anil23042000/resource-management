import { React, useEffect, useForm, useState } from "react";
import { FormGroup, ControlLabel, FormControl, Button, HelpBlock, FormLabel, InputGroup } from "react-bootstrap";
import "./form.scss";
import Form from 'react-bootstrap/Form';
import { Redirect, useHistory } from "react-router-dom";
import ms from 'ms';
import moment from "moment";
import { Validator } from "react";
const ReuseForm = (props) => {
    const { formArr, postLink, data } = props;
    const [mindate, setMindate] = useState(null);
    const [file, setFile] = useState({ preview: '', data: '' })
    console.log(mindate)
    console.log(file)
    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        if (file) {
            formData.set('file', file.data);
        }
        console.log(formData)
        console.log(formData.data)
        let uploadData = {};
        for (let i of formData) {
            uploadData[i[0]] = i[1]
        }
        if (uploadData.email) {
            if (uploadData.email.includes("accionlabs.com")) {
                if (uploadData.employee_phone.match('[0-9]{10}')&&uploadData.employee_phone.length==10) {
                    postLink(formData);
                    props.closeModal()
                } else {
                    alert('Please provide valid phone number')
                }

            } else {
                alert("only Accion Id accepted")
            }
        } else {
            postLink(formData);
            props.closeModal()
        }
    };
    const handleFileChange = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        const min_date = new Date(+new Date(e.target.value) );
        setMindate(moment(min_date).format('YYYY-MM-DD'))
        if (e.target.files[0]) {
            const file = {
                preview: URL.createObjectURL(e.target.files[0]),
                data: e.target.files[0],
            }
            setFile(file)
        }
        if ( moment(e.target.value, "MM-DD-YYYY").isValid()) {
            console.log('Valid Date :)')
            
          } else {
            console.log('Enter Valid Date!')
          }

    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                {formArr.map(({ name, type, label, data, pattern, required }) => {
                    console.log(data)
                    console.log(required)
                    if (data) return (

                        <div className="input-group">
                            <select name={name} id={name}  required={required}>
                                <option  required={required}>{label}</option>
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
                    )
                    if (name == "projectEndDate") return (
                        <div className="input-group">
                            <input
                                type={"date"}
                                min={mindate}
                                name={name}
                                id={name}
                                onChange={handleFileChange}
                                required={required}

                            />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>{label}</label>
                        </div>
                    )
                    if (name == "employee_dob") return (
                        <div className="input-group">
                            <input
                                type={"date"}
                                max="2021-12-31"
                                name={name}
                                id={name}
                                onChange={handleFileChange}
                                required={required}

                            />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>{label}</label>
                        </div>
                    )
                    return (

                        <div className="input-group">
                            <input
                                type={type}
                                name={name}
                                id={name}
                                onChange={handleFileChange}
                                required={required}

                            />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>{label}</label>
                        </div>
                    )
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