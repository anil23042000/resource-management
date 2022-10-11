import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { BsFillPersonPlusFill, BsSearch } from "react-icons/bs";

import "./search.scss"

const Search =()=>{

    return(
        <>
        <div className="App">
        <div class="container h-100">
        <div class="row h-100 justify-content-center align-items-center"></div>
        <Button variant="primary float-right" ><BsFillPersonPlusFill />Add New</Button>
        <InputGroup className="col-6">
          <FormControl
           variant="float-left"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2">
            <BsSearch />
          </Button>
        </InputGroup>
        
        
      </div>
    </div>
        
        </>
    )

}

export default Search;