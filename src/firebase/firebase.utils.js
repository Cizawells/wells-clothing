import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCAOg8oBwsjkKl4V0AE91acLsmb8U7AK0U",
  authDomain: "crwn-db-f5363.firebaseapp.com",
  databaseURL: "https://crwn-db-f5363.firebaseio.com",
  projectId: "crwn-db-f5363",
  storageBucket: "crwn-db-f5363.appspot.com",
  messagingSenderId: "819410158236",
  appId: "1:819410158236:web:e08449acddb82684bda359",
  measurementId: "G-L9BG0F6W1J",
};

export const createUserProfileDocument = async (userAuth, additinalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  console.log(snapshot);
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additinalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
