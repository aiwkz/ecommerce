import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBzlmQJ6KksBT-nCDYhNIkv_Cv7UeRGwZM",
    authDomain: "e-commerce-3f4f4.firebaseapp.com",
    databaseURL: "https://e-commerce-3f4f4.firebaseio.com",
    projectId: "e-commerce-3f4f4",
    storageBucket: "e-commerce-3f4f4.appspot.com",
    messagingSenderId: "281987808661",
    appId: "1:281987808661:web:c9b78d57c0e68fddc0ca9c",
    measurementId: "G-WWPMJTXH3M"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
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
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
  };

  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;