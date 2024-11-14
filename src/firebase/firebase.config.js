// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANPhTUyfqyIMcA0qJ6nBRYvhtYuDIud0A",
  authDomain: "react-authentication-2-a2478.firebaseapp.com",
  projectId: "react-authentication-2-a2478",
  storageBucket: "react-authentication-2-a2478.firebasestorage.app",
  messagingSenderId: "1009679179045",
  appId: "1:1009679179045:web:6cae22a441404ff64e0ecc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
