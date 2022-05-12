import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


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
export const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            // const name = result.user.displayName
            // const email = result.user.email
            // const profilePic = result.user.photoURL

            // localStorage.setItem('name', name)
            // localStorage.setItem('email', email)
            // localStorage.setItem('profilePic', profilePic)
            console.log(result);
        })
        .catch((console.error('error')))
}

// export const signInWithGoogle = () => signInWithPopup(auth, provider)