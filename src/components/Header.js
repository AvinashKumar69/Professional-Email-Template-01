import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Header.css';
import LOGO from '../assets/default.png';
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { AuthContext } from '../context/AuthContext';
import { Button, useToast } from '@chakra-ui/react';
import { auth, provider } from '../config/firebase-config';


const Header = (props) => {
    console.log('props at Header-->', props);
    const { currentUser } = props
    console.log('currentUser at Header-->', currentUser);

    const navigate = useNavigate()
    const { dispatch } = useContext(AuthContext)
    const [loading, setLoading] = useState(false)
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

                navigate('/')

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

    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                dispatch({ type: 'LOGOUT', payload: null })

                toast({
                    title: 'Signed Out!',
                    description: "You Have SignedOut Successfully!!",
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                })

                navigate('/')
            })
            .catch((error) => {
                // An error happened.
                console.log(error);
            });
    }


    return (
        <nav className='flex flex-row items-center justify-between px-20 h-16 text-white font-mono tracking-widest xs:tracking-tighter xs:flex-row xs:px-2'
            // style={{ background: 'linear-gradient(to right, #140e38, #194089)' }}
            // style={{ backgroundColor: '#4646ec' }}
            style={{ backgroundColor: '#434750' }}
        >
            <Link to='/' className='xyzabc-half-border'>
                <h1 className='text-3xl font-black xs:text-xl'>EasyEmails</h1>
            </Link>

            {currentUser !== null ?

                <div className='flex flex-row items-center justify-center space-x-6 xs:space-x-2'>
                    {/* <Link to='/home' className='font-medium text-xl xyzabc-half-border'>
                        Home
                    </Link> */}
                    {/* <Link to='/aboutus' className='font-medium text-xl xyzabc-half-border'>
                        AboutUs
                    </Link> */}
                    <Link to='/contactus' className='font-medium text-xl xyzabc-half-border'>
                        ContactUs
                    </Link>
                    {/* <Link to='/ourservices' className='font-medium text-xl xyzabc-half-border'>
                        Services
                    </Link> */}

                    {/* <img className='h-12 w-12 rounded-full' src={currentUser.photoURL} alt='profile' /> */}
                    <h1 className='xyzabc-half-border font-medium text-xl'>
                        {currentUser.displayName}!
                    </h1>

                    <Link to='/' className=''>
                        <Button className='' type='button'
                            colorScheme='red'
                            width='100%'
                            onClick={handleLogOut}
                        // isLoading={loading}
                        >
                            <span className='font-bold text-xl xs:text-base'>Logout</span>
                        </Button>
                    </Link>
                </div>

                :

                <div className='flex flex-row items-center justify-center space-x-6 xs:space-x-2'>
                    {/* <Link to='/home' className='font-medium text-xl xyzabc-half-border'>
                        Home
                    </Link> */}
                    {/* <Link to='/aboutus' className='font-medium text-xl xyzabc-half-border'>
                        AboutUs
                    </Link> */}
                    <Link to='/contactus' className='font-medium text-xl xyzabc-half-border'>
                        ContactUs
                    </Link>
                    {/* <Link to='/ourservices' className='font-medium text-xl xyzabc-half-border'>
                        Services
                    </Link> */}
                    <Link to='/home' className=''>
                        <Button className='' type='button'
                            colorScheme='red'
                            width='100%'
                            onClick={handleGoogleLogin}
                        // isLoading={loading}
                        >
                            <span className='font-bold text-xl xs:text-base'>Login</span>
                        </Button>
                    </Link>
                </div>
            }

        </nav>
    )
}

export default Header;