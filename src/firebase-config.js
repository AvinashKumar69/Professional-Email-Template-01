// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCAz3NTFucmrR2z63yEfyjN4FH38X2cek",
  authDomain: "professionalemailtemplate.firebaseapp.com",
  projectId: "professionalemailtemplate",
  storageBucket: "professionalemailtemplate.appspot.com",
  messagingSenderId: "57207164269",
  appId: "1:57207164269:web:b7413bc978b363ca02de64",
  measurementId: "G-92NRTV2N6M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);