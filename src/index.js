import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'bootstrap/dist/css/bootstrap.css';

import './css/index.css';
import firebase from './firebase/firebase';
import App from './js/App';
import registerServiceWorker from './registerServiceWorker';

import '../node_modules/semantic-ui-css/semantic.min.css';

ReactDOM.render(<App />, document.getElementById('root'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('Logged in');
    } else {
        console.log('Log out');
    }
});

registerServiceWorker();

