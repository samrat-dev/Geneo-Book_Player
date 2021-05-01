import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDpiIfc3PaYvlM6vdUWebtNke0OxQpmv1Q",
    authDomain: "crwn-db-c15e9.firebaseapp.com",
    projectId: "crwn-db-c15e9",
    storageBucket: "crwn-db-c15e9.appspot.com",
    messagingSenderId: "464040642457",
    appId: "1:464040642457:web:c9a33a00fd6c43c239b508",
    measurementId: "G-5CM5HN0182"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    'prompt': 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


/**
 * https://console.firebase.google.com/project/crwn-db-c15e9/authentication/users
 https://www.npmjs.com/package/firebase
 https://firebase.google.com/docs/reference/js/#firebase-javascript-sdk-reference
 https://firebase.google.com/docs/reference/js/firebase.auth.GoogleAuthProvider
 https://firebase.google.com/docs/reference/js/firebase.auth

 */
