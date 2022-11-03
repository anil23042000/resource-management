import React from "react";
import "./login.scss";
import GoogleLogin from "react-google-login";
import { connect } from "react-redux";
import { startSpinner, stopSpinner } from "../../actions/Loader";
import { toast } from "react-toastify";
import { login } from "../../actions/User";

import ConfigSettings from "../../config/appConfig";
const clientId = ConfigSettings.clientId;

const Login = (props) => {
  const { onlogin, history, onStopSpinner, onStartSpinner } = props;
  const onSuccess = (res) => {
    let userDetails = res.profileObj;
    if (userDetails && userDetails.email.includes("accionlabs.com")) {
      onlogin(
        userDetails,
        () => {
          history.push("/admin");
          console.log(userDetails.email);
        },
        () => {
          toast.error(
            "You do not have permission to login. please contact your administrator"
          );
        }
      );
    } else if (userDetails && !userDetails.email.includes("accionlabs.com")) {
      toast.error(
        "You do not have permission to login. please contact your administrator"
      );
    }
    onStopSpinner();
  };

  return (
    <div className="app">
      <div className="loginForm">
        <div>
          <img src="images/accionlabs-icon.png" className="accionLogo" />
        </div>
        <div className="persaletext">
          <img src="images/resource-management.png" className="resocreLogo" />{" "}
          Resource Management
        </div>
        <GoogleLogin
          clientId={clientId}
          onSuccess={(res) => {
            onStartSpinner();
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
  onlogin: (data, onSuccess, onerror) =>
    dispatch(login(data, onSuccess, onerror)),
});

export default connect(null, mapDispatchToProps)(Login);
