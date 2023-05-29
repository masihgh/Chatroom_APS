// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCziEfacCbgqrVnMg7dtXomEyBrukEN5uM",
  authDomain: "chatroom-aps-998fc.firebaseapp.com",
  projectId: "chatroom-aps",
  storageBucket: "chatroom-aps.appspot.com",
  messagingSenderId: "445265524647",
  appId: "1:445265524647:web:de78a95bbd7d911e14a882",
  measurementId: "G-774G335QS7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);