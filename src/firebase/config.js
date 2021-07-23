import firebase from 'firebase/app';


import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/analytics';



  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyD7Y_VacEXIxKX3Y4dWIdR6SsqLv9sL_Zw",
    authDomain: "gallegram.firebaseapp.com",
    projectId: "gallegram",
    storageBucket: "gallegram.appspot.com",
    messagingSenderId: "515359967811",
    appId: "1:515359967811:web:f337dffcc914d41acd22f6",
    measurementId: "G-STE2E561S4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp }

