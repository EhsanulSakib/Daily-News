// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOeW7GfhDsMsIpStxLPIxT70xi-nvM3ss",
  authDomain: "daily-news-auth.firebaseapp.com",
  projectId: "daily-news-auth",
  storageBucket: "daily-news-auth.appspot.com",
  messagingSenderId: "248722359043",
  appId: "1:248722359043:web:4c42c26ede8b6704e49f36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;