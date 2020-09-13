import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBPOYhQ_lMhxltGIfp8068qv6mK5fvNiPc",
    authDomain: "hirolemo-photofy.firebaseapp.com",
    databaseURL: "https://hirolemo-photofy.firebaseio.com",
    projectId: "hirolemo-photofy",
    storageBucket: "hirolemo-photofy.appspot.com",
    messagingSenderId: "222343114478",
    appId: "1:222343114478:web:f5f6643c71f1a3a5350dff"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFireStore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  //export const services
  export { projectStorage, projectFireStore, timestamp };