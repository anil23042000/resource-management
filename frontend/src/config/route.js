import React, { useEffect } from "react";
import { HashRouter as Router, Switch } from "react-router-dom";
import routeNavigators from "../constants/routeNavigators";
import PrivateRoute from "../components/protectedRoute";
import { connect } from "react-redux";
//import { logOut } from "../actions/User";

const RouteConfig = (props) => {
  const { isLogin, onlogOut } = props;
  console.log(isLogin);
  useEffect(() => {
    if (!isLogin) {
    }
  }, [isLogin, onlogOut]);

  return (
    <>
      <Router hashType="slash">
        <Switch> 
          {routeNavigators.map((prop, key) => {
            return (
              <PrivateRoute
                path={prop.path}
                name={prop.name}
                component={prop.component}
                isPublic={prop.isPublic}
                key={key}
                isLogin={isLogin}
                exact={true}
              />
            );
          })}

        </Switch>
      </Router>
    </>
  );
};

const mapStateToProps = (state) => ({
  isLogin: state?.userInfo?.loginStatus ?? false,
});

const mapDispatchToProps = (dispatch) => ({
  // onlogOut: () => dispatch(logOut()),
});
export default connect(mapStateToProps, mapDispatchToProps)(RouteConfig);
