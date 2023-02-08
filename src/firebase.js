import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAs89g7rakItHpIjBkMfay0sngeO0e8CY8",
  authDomain: "clone-86f03.firebaseapp.com",
  projectId: "clone-86f03",
  storageBucket: "clone-86f03.appspot.com",
  messagingSenderId: "829084093551",
  appId: "1:829084093551:web:5be9637f1b9393fa7cd19a",
  measurementId: "G-M5XXS10987",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
