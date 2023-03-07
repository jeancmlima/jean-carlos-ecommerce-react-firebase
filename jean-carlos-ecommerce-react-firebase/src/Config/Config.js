import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCybdOTCSp-_5RXGeAuDwXd3GIHziMr3RU",
  authDomain: "tutorial-firebase---2-2023-1.firebaseapp.com",
  projectId: "tutorial-firebase---2-2023-1",
  storageBucket: "tutorial-firebase---2-2023-1.appspot.com",
  messagingSenderId: "1089528297504",
  appId: "1:1089528297504:web:0fa88ebbcc7bd41092e445"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export {auth,fs,storage}