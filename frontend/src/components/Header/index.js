import React from "react";
import "./header.scss"
const Header = (props) => {
    return (
        <>
            <div className="Container">
                <h1 className="h1-responsive font-weight-bold">
                    {props.name}
                </h1>
            </div>
        </>
    )
}

export default Header;