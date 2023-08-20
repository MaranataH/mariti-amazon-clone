import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDEMFn0hO9nEuXrzHU7ENrJRuxEOww1ZFs",
  authDomain: "mariti-be74c.firebaseapp.com",
  projectId: "mariti-be74c",
  storageBucket: "mariti-be74c.appspot.com",
  messagingSenderId: "472708430694",
  appId: "1:472708430694:web:968aba85f153a4f13b26a7"
};
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);
// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth, db };