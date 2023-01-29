import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBIltFxeGhbLPo63eVIvJVqeF-WuiARKvA",
  authDomain: "heronbend-87853.firebaseapp.com",
  projectId: "heronbend-87853",
  storageBucket: "heronbend-87853.appspot.com",
  messagingSenderId: "937911672073",
  appId: "1:937911672073:web:da900abec7290ff12607d8",
  measurementId: "G-9LPZXQ46EP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export default app