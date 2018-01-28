import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'bootstrap/dist/css/bootstrap.css';

import './css/index.css';
import firebase from './firebase/firebase';
import App, { history } from './js/App';
import registerServiceWorker from './registerServiceWorker';

import '../node_modules/semantic-ui-css/semantic.min.css';

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(<App />, document.getElementById('root'));
        hasRendered = true;
    }
};
ReactDOM.render(<p>Loading ...</p>, document.getElementById('root'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        renderApp();
        if (history.location.pathname === '/') {
            history.push('/DashBoard');
        }
    } else {
        renderApp();
        history.push('/');
    }
});

registerServiceWorker();

