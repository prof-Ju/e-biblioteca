import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBL2tQ0FVpojfpXTMP-oObaaRuS4DayAOo",
  authDomain: "marcos-biblioteca.firebaseapp.com",
  projectId: "marcos-biblioteca",
  storageBucket: "marcos-biblioteca.appspot.com",
  messagingSenderId: "487229502382",
  appId: "1:487229502382:web:124e0f3b8a145379b34e3f"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
