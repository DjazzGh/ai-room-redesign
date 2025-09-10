// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-room-redesign-b5eba.firebaseapp.com",
  projectId: "ai-room-redesign-b5eba",
  storageBucket: "ai-room-redesign-b5eba.firebasestorage.app",
  messagingSenderId: "996780146505",
  appId: "1:996780146505:web:6419ac6bf5ab333c85e498",
  measurementId: "G-6Q9Q0KFEDC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const storage = getStorage(app);