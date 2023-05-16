// Import the functions you need from the SDKs you need
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDI3TCSDHcYexFfybgOVa689_wGAGDJHyo",
  authDomain: "foodini-d2923.firebaseapp.com",
  projectId: "foodini-d2923",
  storageBucket: "foodini-d2923.appspot.com",
  messagingSenderId: "378254715405",
  appId: "1:378254715405:web:8363f5b4eb944c546a8344",
  measurementId: "G-29CDWHK1L9"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
// export  const db=getFirestore(app)
// const authentication = getAuth(app)
export { app, firebaseConfig };