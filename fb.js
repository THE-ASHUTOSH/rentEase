// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
import { initializeUserData } from './firebase-db.js';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmVAhZjVWNl54KlBrcmN6rrFFXQHJ9Vhw",
  authDomain: "rentease-810f6.firebaseapp.com",
  projectId: "rentease-810f6",
  storageBucket: "rentease-810f6.firebasestorage.app",
  messagingSenderId: "701026612936",
  appId: "1:701026612936:web:35f7a6d44d9e86153097fd"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();
const provider = new GoogleAuthProvider();


const userSignIn = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        await initializeUserData(user); // Initialize user data
        window.location.href = "dashboard/dashboard.html";
    } catch (error) {
        console.log(error.message);
    }
};

onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("User is signed in:", user);
    } else {
      console.log("User is signed out");
    }
  });