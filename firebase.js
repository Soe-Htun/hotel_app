import firebase from 'firebase'

require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");
require("firebase/functions");

var firebaseConfig = {
    apiKey: "AIzaSyDwRlv-knUO3Yu-kN9PrkfPlyWtexjE6M0",
    authDomain: "hotelapp-24a66.firebaseapp.com",
    databaseURL: "https://hotelapp-24a66.firebaseio.com",
    projectId: "hotelapp-24a66",
    storageBucket: "hotelapp-24a66.appspot.com",
    messagingSenderId: "905091544064",
    appId: "1:905091544064:web:aca4a7db4efc4a012114e5",
    measurementId: "G-5ZDZ277H0K"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth()
  const db= firebase.firestore()
  const storage = firebase.storage()
  const functions = firebase.functions()

export {
    firebase,
    auth,
    db,
    storage,
    functions
}