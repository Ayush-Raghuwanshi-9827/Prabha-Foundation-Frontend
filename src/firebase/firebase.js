// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBE7u4zQnnUDU3hxONPuAoE2Vdg3pqSHvw",
  authDomain: "prabha-foundation.firebaseapp.com",
  projectId: "prabha-foundation",
  storageBucket: "prabha-foundation.firebasestorage.app",
  messagingSenderId: "34751806555",
  appId: "1:34751806555:web:8cda32696ae9152f6dd37e",
  measurementId: "G-1ZTDF0927L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
