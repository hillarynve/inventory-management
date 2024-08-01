// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-VO2wKG9qtZQTZbRsFrUY3cd4mBKsHjQ",
  authDomain: "inventory-management-43f8a.firebaseapp.com",
  projectId: "inventory-management-43f8a",
  storageBucket: "inventory-management-43f8a.appspot.com",
  messagingSenderId: "934122644507",
  appId: "1:934122644507:web:7304426d3c0e704bf384be",
  measurementId: "G-7RZ7NR8NSN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore};