import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC4b3n0zOJT_aKREUXQANp7E4lzkp3Q_84",
  authDomain: "wells-clothing-db.firebaseapp.com",
  databaseURL: "https://wells-clothing-db.firebaseio.com",
  projectId: "wells-clothing-db",
  storageBucket: "wells-clothing-db.appspot.com",
  messagingSenderId: "617603404653",
  appId: "1:617603404653:web:bda4d952bd6a5b83558064",
  measurementId: "G-D5E7JMN2GC"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
