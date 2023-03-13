import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA99apF4K8MkwrxhdGCgQZBjABAiIQY6JE",
  authDomain: "smartmirror-d43d2.firebaseapp.com",
  projectId: "smartmirror-d43d2",
  storageBucket: "smartmirror-d43d2.appspot.com",
  messagingSenderId: "872139249533",
  appId: "1:872139249533:web:6b498938163dc8817c9e14",
  measurementId: "G-K81EXJMXT5",
};

export default firebase.initializeApp(firebaseConfig);
