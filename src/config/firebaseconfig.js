// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQFh37VK5RHTEbzfH3lvK1fIlRbY5G-tc",
  authDomain: "serkom-refi.firebaseapp.com",
  projectId: "serkom-refi",
  storageBucket: "serkom-refi.appspot.com",
  messagingSenderId: "975019791949",
  appId: "1:975019791949:web:d11772734358efcc3bae04",
  measurementId: "G-BRE77J99QT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app); // Storage initialized here

// Export Firestore and Storage functionality
export { db, collection, addDoc, getDocs, storage };
