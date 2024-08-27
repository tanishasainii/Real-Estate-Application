// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyBh1QnmkhXzGfVmUDZs9f3pOuMYGYafDco",
  authDomain: "mern-estate-28da5.firebaseapp.com",
  projectId: "mern-estate-28da5",
  storageBucket: "mern-estate-28da5.appspot.com",
  messagingSenderId: "503289736779",
  appId: "1:503289736779:web:96cb6b3ebf7c30f40067ce"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);