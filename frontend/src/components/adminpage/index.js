import React from "react";
import { Button, Form } from "react-bootstrap";
import { Redirect, useHistory } from "react-router-dom";
import Header from "../Header";
import "./adminpage.scss"

const AdminPage = (props) => {

   const history= useHistory();
    const HandleSubmitt = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        let uploadData = {};
        for (let i of formData) {
            uploadData[i[0]] = i[1]
        }
        console.log(uploadData.email)
        if (uploadData.email == "admin@accionlabs.com" && uploadData.email.includes("accionlabs.com") && uploadData.password=="admin@123") {
            history.push("/projects")
        }else{
            alert("you don't have permission")
        }
    }
    

    return <>
        <div className="header">
            <Header name="Admin" />
        </div>
        <div className="Conatiner">

            <div className="form">
                <form onSubmit={HandleSubmitt}>
                    <div className="input-group">
                        <input name="email" type={"email"} />
                        <label>Email</label>
                    </div>
                    <div className="input-group">
                        <input name="password" type={"password"} />
                        <label>password</label>
                    </div>
                    <Button className="sbutton" variant="primary" type="submit">
                        Submit
                    </Button>
                </form>

                <span>if You Don't have Access</span>
                <button  className="green">Requests to Access</button>
            </div>
        </div>
    </>
}

export default AdminPage;
