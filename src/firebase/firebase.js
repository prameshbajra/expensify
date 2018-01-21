import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: 'AIzaSyBn5fLcVSl4A6I-EUucf9m8d0ibZODWsjk',
    authDomain: 'expensify-3c388.firebaseapp.com',
    databaseURL: 'https://expensify-3c388.firebaseio.com',
    projectId: 'expensify-3c388',
    storageBucket: 'expensify-3c388.appspot.com',
    messagingSenderId: '867239426865',
};
firebase.initializeApp(config);

const database = firebase.database();

export { database, firebase as default };
