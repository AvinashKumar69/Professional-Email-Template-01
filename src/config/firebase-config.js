import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDCAz3NTFucmrR2z63yEfyjN4FH38X2cek",
    authDomain: "professionalemailtemplate.firebaseapp.com",
    projectId: "professionalemailtemplate",
    storageBucket: "professionalemailtemplate.appspot.com",
    messagingSenderId: "57207164269",
    appId: "1:57207164269:web:b7413bc978b363ca02de64",
    measurementId: "G-92NRTV2N6M"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);