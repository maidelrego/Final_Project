import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useGlobalContext } from "../../utils/GlobalState";

export default function AuthenticatedRoute({ children, ...rest }) {
  const [ state, dispatch ] = useGlobalContext();


console.log(state.role)
  return (
    <Route {...rest}>
      {state.role === "admin" ? (
        children
      ) : (
        <Redirect to={
          `/login`
        } />
      )}
    </Route>
  );
}