// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbx2xqMRp3rjUf1N4OwceLQhHsMbcKz_s",
    authDomain: "ligth-house-school.firebaseapp.com",
    projectId: "ligth-house-school",
    storageBucket: "ligth-house-school.appspot.com",
    messagingSenderId: "279405598846",
    appId: "1:279405598846:web:44493710f64f9b3eed202f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;