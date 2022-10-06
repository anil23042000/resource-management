import React from "react";
import "./login.scss";
import GoogleLogin from "react-google-login";
import { connect } from "react-redux";
import { startSpinner, stopSpinner } from "../../actions/Loader";
import { toast } from "react-toastify";

import ConfigSettings from "../../config/appConfig";
const clientId = ConfigSettings.clientId;

const Login = (props) => {
  const onSuccess = (res) => {
    let userDetails = res.profileObj;
    if (userDetails && userDetails.email.includes("accionlabs.com")) {
      console.log(userDetails.email);
    } else if (userDetails && !userDetails.email.includes("accionlabs.com")) {
      toast.error(
        "You do not have permission to login. please contact your administrator"
      );
    }
    props.onStopSpinner();
  };

  return (
    <div className="app">
      <div className="loginForm">
        <div >
          <img src="images/accionlabs-icon.png" className="accionLogo"/>
        </div>
        <div className="persaletext">
        <img src="images/resource-management.png" className="resocreLogo"/>
        {" "}
           Resource Management
        </div>
        <GoogleLogin
          clientId={clientId}
          onSuccess={(res) => {
            props.onStartSpinner();
            onSuccess(res);
          }}
          buttonText="Login With Gmail"
          className="loginbutton"
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onStartSpinner: () => startSpinner(dispatch),
  onStopSpinner: () => stopSpinner(dispatch),
});

export default connect(null, mapDispatchToProps)(Login);
