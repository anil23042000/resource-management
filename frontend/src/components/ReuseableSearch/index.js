import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { InputGroup, FontAwesomeIcon, Form } from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { BsFillPersonPlusFill, BsSearch } from "react-icons/bs";


import "./search.scss"
import ReuseModal from "../Modal";

const Search = (props) => {
    const { titel, formArr, postLink, value, data,search } = props;
    console.log(data);
    const [show, setShow] = useState(false);
    const showModal = () => {
        setShow(true);
    }
    const closeModal = () => {
        console.log("closeModal")
        setShow(false)
    }
    const findData = (e) => {
    
        console.log(e.target.value.length);
        if(e.target.value.length<=0){
            search(null)
           
        } else{
            search(e.target.value);  
        }
          
    }



    return (
        <>
            <div className="App">
                <div class="container h-100">
                    <div class="row h-100 justify-content-center align-items-center"></div>
                    <Button variant="success float-right"
                        onClick={showModal} ><BsFillPersonPlusFill />Add</Button>
                    <InputGroup className="input col-4">
                        <InputGroup.Prepend>
                            <InputGroup.Text>
                                <BsSearch icon="search" />
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                            type="text"
                            placeholder="Search here.."
                            onKeyUp={(e) => findData(e)}
                        />
                    </InputGroup>
                    {show && <ReuseModal
                        show={show}
                        postLink={postLink}
                        value={value}
                        closeModal={closeModal}
                        formArr={formArr}
                        data={data}
                        titel={titel} />}
                </div>
            </div>
            
        </>
    )

}

export default Search;