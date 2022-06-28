import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFMhtA40CSJGyn9neF7qANCvVvyCPijPk",
  authDomain: "house-marketplace-ae36e.firebaseapp.com",
  projectId: "house-marketplace-ae36e",
  storageBucket: "house-marketplace-ae36e.appspot.com",
  messagingSenderId: "678670295205",
  appId: "1:678670295205:web:1bdb2b7cf9bd4f8754ad4c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
