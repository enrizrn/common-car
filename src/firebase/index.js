import firebase from 'firebase/app';

const config = {
    apiKey: 'AIzaSyC5icNsATl4UMNiMOCfxi98dUlXX4V6EPA',
    authDomain: 'common-car.firebaseapp.com',
    databaseURL: 'https://common-car.firebaseio.com',
    projectId: 'common-car',
    storageBucket: 'common-car.appspot.com',
    messagingSenderId: '212871324341',
};
firebase.initializeApp(config);
