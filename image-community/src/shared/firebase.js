import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCFEDFI6wwaletB8SRpUjzVOCXwdM0DD9g",
  authDomain: "img-community-4bfe4.firebaseapp.com",
  projectId: "img-community-4bfe4",
  storageBucket: "img-community-4bfe4.appspot.com",
  messagingSenderId: "38048899710",
  appId: "1:38048899710:web:4ad715926771ae1afb2e2f",
  measurementId: "G-TLHNCL85BJ",
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

export { auth, apiKey, firestore, storage };
