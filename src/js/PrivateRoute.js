import React from 'react';
import { Route, Redirect } from 'react-router';

const PrivateRoute = ({
    component: Component,
    currentUser,
    ...rest
}) => (
    <Route
        {...rest}
        component={props => (
            (currentUser) ?
                (
                    <Component {...props} />
                ) : (
                    <Redirect to="/" />
                )
        )}
    />
);

export default PrivateRoute;
