import React from "react";
import { Route, Redirect } from "react-router-dom";
import GlobalSpinner from "../../components/GlobalSpinner";

const PrivateRoute = ({ component: Component, name, isLogin, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (isLogin) {
        if (name !== "Login") {
          return (
            <>
              <Component {...props} {...rest} />
              <GlobalSpinner />
            </>
          );
        } else {
          return <Redirect to="/accounts" />;
        }
      } else {
        if (name !== "Login" && !rest.isPublic) {
          return <Redirect to="/" />;
        } else {
          return (
            <>
              <Component {...props} {...rest} />
              <GlobalSpinner />
            </>
          );
        }
      }
    }}
  />
);

export default PrivateRoute;
