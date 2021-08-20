import React from "react";
import { Route } from "react-router-dom";

const AppRoutes = ({ component, path, ...rest }) => {

  const ChildComponent = component;
  return (
    <Route
      path={path}
      render={props => <ChildComponent {...props} />}
      {...rest} ////properties if not exist...error check
    />
  )
}

export default AppRoutes