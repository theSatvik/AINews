import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbrMNOSOUyejkCSMhSQV6HbiaioxkXZi4",
  authDomain: "news-99924.firebaseapp.com",
  projectId: "news-99924",
  storageBucket: "news-99924.appspot.com",
  messagingSenderId: "971773143891",
  appId: "1:971773143891:web:e1632374ce9375eab0cfa6",
  measurementId: "G-VPX9ECGCYD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
