import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/NewLoginForm.css';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, provider } from '../config/firebase-config';
import { AuthContext } from '../context/AuthContext';
import { useToast } from '@chakra-ui/react';



const NewLoginForm = () => {

    const navigate = useNavigate()
    const { dispatch } = useContext(AuthContext)
    const toast = useToast()

    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...
                console.log('user of loginWithGoogle-->', user);
                dispatch({ type: 'LOGIN', payload: user })

                toast({
                    title: 'LoggedIn!',
                    description: "Your Successfully Loggedin via Google!!",
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                })

                navigate('/contactus')

            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
                console.log(errorMessage, email, credential, errorCode);

                toast({
                    title: 'Error, Something Went Wrong!',
                    description: "Please Try Again!!",
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                })

            });
    }

    return (
        <div className='newLoginForm-body h-screen'>
            <ul className='newLoginForm-ul'>
                <li className='newLoginForm-li'>
                    <Link className='newLoginForm-link' to='#'
                        onClick={handleGoogleLogin}
                    >
                        <i className="fa-brands fa-google newLoginForm-i" />
                        <span className='newLoginForm-span'>Login with Google</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NewLoginForm;