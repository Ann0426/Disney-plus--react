import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAkWJJpUfQDL-CM5vMn-l0SJP4oTdI3pGw",
    authDomain: "disney-plus-c8dec.firebaseapp.com",
    projectId: "disney-plus-c8dec",
    storageBucket: "disney-plus-c8dec.appspot.com",
    messagingSenderId: "496641720539",
    appId: "1:496641720539:web:e7786d2acb79c65fca0cfe",
    measurementId: "G-FYVWSVVDZV"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;