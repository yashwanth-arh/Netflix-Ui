import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBScNRFLXThjbH9N66KcuNY3ctSHchcG30",
  authDomain: "react-netflix-clone-d1962.firebaseapp.com",
  projectId: "react-netflix-clone-d1962",
  storageBucket: "react-netflix-clone-d1962.appspot.com",
  messagingSenderId: "557326986786",
  appId: "1:557326986786:web:b94414685f1ee48daea47b",
  measurementId: "G-Q6CV4YL0KZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
