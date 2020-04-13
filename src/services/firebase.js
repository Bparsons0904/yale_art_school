// Firebase services file

// Import firebase functions 
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Set config for DB
const config = {
  apiKey: "AIzaSyAoIBZShVSMCw-vQmKiw2fndRLcTyEVhgU",
  authDomain: "yale-art.firebaseapp.com",
  databaseURL: "https://yale-art.firebaseio.com",
  projectId: "yale-art",
  storageBucket: "yale-art.appspot.com",
  messagingSenderId: "447241486515",
  appId: "1:447241486515:web:7b6fc52cc9734aa782b0c6",
};
// Initialize Firebase
firebase.initializeApp(config);

// Export auth and db connections
export const auth = firebase.auth;
export const db = firebase.firestore();