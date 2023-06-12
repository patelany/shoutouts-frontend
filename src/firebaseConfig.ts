// Import the functions you need from the SDKs you need
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdmXSikXn_XadduTmSGjLymsdT6pjhqkw",
  authDomain: "shoutouts-5c3ba.firebaseapp.com",
  projectId: "shoutouts-5c3ba",
  storageBucket: "shoutouts-5c3ba.appspot.com",
  messagingSenderId: "839903348876",
  appId: "1:839903348876:web:86faa1953723bf575393a9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
}
export function signOut(): void {
  auth.signOut();
}

export const storage = getStorage(app);
