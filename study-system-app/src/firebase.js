// import firebase from 'firebase';
import * as firebase from 'firebase/app'

const app = firebase.initializeApp({
    apiKey: "AIzaSyAf02jIhvwfN5LutBBEgFjBIvHPWLEnk0Q",
    authDomain: "groupformationsystem.firebaseapp.com",
    databaseURL: "https://groupformationsystem-default-rtdb.firebaseio.com",
    projectId: "groupformationsystem",
    storageBucket: "groupformationsystem.appspot.com",
    messagingSenderId: "912375308149",
    appId: "1:912375308149:web:6932a8593b14559538bd3c",
    measurementId: "G-13XJR1BL4W"
});

export default app;

import "firebase/firestore"

// ... before export default statement
export const firestore = firebase.firestore()
