import React from 'react';
import { Button } from 'semantic-ui-react';

import firebase, { googleProvider } from '../firebase/firebase';

const signInHandler = () => {
    firebase.auth().signInWithPopup(googleProvider);
};

const signInButton = (props) => {
    // Render Sign In button only if user is not logged in ...
    if (!firebase.auth().currentUser) {
        return (
            <Button onClick={signInHandler}>
                Sign In
            </Button>
        );
    }
    props.history.push('/DashBoard');
    return (
        <h3 className="text-center"> You are currently logged in.</h3>
    );
};

const LoginPage = props => (
    <div>
        <h1>LoginPage</h1>
        {signInButton(props)}
    </div>
);

export default LoginPage;
