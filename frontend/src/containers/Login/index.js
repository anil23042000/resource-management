import React from "react";
import "./login.scss";
import GoogleLogin from "react-google-login";
import { connect } from "react-redux";
import { startSpinner, stopSpinner } from "../../actions/Loader";

import ConfigSettings from "../../config/appConfig";
const clientId = ConfigSettings.clientId;

const Login = (props) => {
  const onSuccess = (res) => {
    props.onStartSpinner();
    let userDetails = res.profileObj;
    console.log(userDetails);
  };

  return (
    <div className="app">
      <div className="loginForm">
        <div className="accionLogo">accionLogo</div>
        <div className="persaletext">
          <div className="persaleLogo">logo</div> Resource Management
        </div>
        <GoogleLogin
          clientId={clientId}
          onSuccess={onSuccess}
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
