import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useGlobalContext } from "../../utils/GlobalState";

export default function AuthenticatedRoute({ children, ...rest }) {
  const { isAuthenticated } = useGlobalContext();
  return (
    <Route {...rest}>
      {isAuthenticated ? (
        children
      ) : (
        <Redirect to={
          `/login`
        } />
      )}
    </Route>
  );
}