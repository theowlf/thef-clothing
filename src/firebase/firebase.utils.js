import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAGeg2q73igzV_c-sPwIVBQ07-WxZ14Lek",
  authDomain: "thef-db.firebaseapp.com",
  databaseURL: "https://thef-db.firebaseio.com",
  projectId: "thef-db",
  storageBucket: "thef-db.appspot.com",
  messagingSenderId: "395641495373",
  appId: "1:395641495373:web:f1c44582e8fc522ca3e104",
  measurementId: "G-1Y6N68HE71",
};

export const createUserProfileDocument = async (userAuth, additinalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
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
