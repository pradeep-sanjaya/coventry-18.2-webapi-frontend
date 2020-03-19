import React from "react";
import { Redirect, Route } from "react-router-dom";

const PreAuthenticatedRoute = ({ component: Component, ...rest }) => (
    <Route  {...rest} render={props => localStorage.getItem('accessToken') ? (
        <Redirect to={{
            pathname: "/", state: { from: props.location }
        }} />
    ) : (
            <Component {...props} />
        )
    } />
);

export default PreAuthenticatedRoute;