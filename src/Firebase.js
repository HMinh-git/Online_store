// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDqIi1wFUMTFeKA0TCdDU1JWeaQWmWOlC0",
  authDomain: "webbansach-f9994.firebaseapp.com",
  projectId: "webbansach-f9994",
  storageBucket: "webbansach-f9994.appspot.com",
  messagingSenderId: "655191171289",
  appId: "1:655191171289:web:b53f19cfe228456c199ec8",
  measurementId: "G-QDX2NDZ0FT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const storage = getStorage(app);
export { storage };
export default db;




