// Import necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";


// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmVAhZjVWNl54KlBrcmN6rrFFXQHJ9Vhw",
  authDomain: "rentease-810f6.firebaseapp.com",
  projectId: "rentease-810f6",
  storageBucket: "rentease-810f6.firebasestorage.app",
  messagingSenderId: "701026612936",
  appId: "1:701026612936:web:35f7a6d44d9e86153097fd"

}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

// Function to handle login
const userSignIn = async() => {
  try{
  const result = await signInWithPopup(auth, provider)
  window.location.href = "selectPage/optionPage.html" ;
  }
  catch(error){
    console.log(error);
    
  }
};
async function checkUser() {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log("User is signed in:", user);
        resolve(user); // Resolve with the user object when signed in
      } else {
        window.location.href = "index.html";
        reject("No user signed in");
      }
    });
  });
}

async function returnName() {
  const user = await checkUser(); // Wait for checkUser to resolve
  return user.displayName; // Return the display name from the resolved user object
}
async function returnPhoto() {
  const user = await checkUser(); // Wait for checkUser to resolve
  return user.photoURL; // Return the display name from the resolved user object
}
const userSignOut = async () => {
  try {
    await signOut(auth);
    console.log("User signed out");
    window.location.href = "../index.html"; // Redirect to login page after logout
  } catch (error) {
    console.log("Error signing out:", error);
  }
};

// async function returnName(){
//   name = await checkUser()
//   return name
// }

// Attach event listener to login button
export {userSignIn,checkUser,returnName,returnPhoto,userSignOut,db}







