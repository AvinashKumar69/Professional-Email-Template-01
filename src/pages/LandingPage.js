import { Button, useToast } from '@chakra-ui/react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailPic from '../assets/email03.svg';
import SideBar from '../components/SideBar';
import { auth, provider } from '../config/firebase-config';
import { AuthContext } from '../context/AuthContext';
import '../styles/LandingPage.css';


const LandingPage = (props) => {
    const { currentUser } = props

    const { dispatch } = useContext(AuthContext)
    const navigate = useNavigate()
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

                navigate('/home')

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
        <>
            <div className='flex flex-row xs:flex-col'
                style={{ background: '#434750' }}
            >
                <SideBar />
                <div className='flex flex-col items-start justify-center mx-auto xs:p-5 text-gray-400 font-serif w-1/2 xs:w-full'>
                    <h1 className='text-3xl xs:text-2xl tracking-widest uppercase text-left font-black mb-5'>
                        The professional email templates helping folks<br /> write the formal emails.
                    </h1>
                    <p className='text-xl xs:text-lg text-left font-black font-sarif'>
                       We offer Ready-to-Use email-samples for the different situations as per the user's requirement.
                       <br/>
                       Just select the type of emails from the left-sidebar and explore our rich samples curated by the industry experts. 
                    </p>
                </div>
            </div>







            {/* <div className=''>

                <div className='flex flex-row items-center justify-evenly h-96 px-20 responsive-diagonal'
                // style={{ background: 'linear-gradient(to right, #140e38, #194089)' }}
                >
                    <div className='flex flex-col items-start justify-start w-1/2 text-black'>
                        <h1 className='text-3xl font-semibold mb-5 uppercase tracking-widest'>
                            The online professional email template generator helping folks write the formal emails as per their needs.
                        </h1>
                        <p className='text-xl font-medium'>
                            Fill in a few details and we will create a ready-to-use formal email samples for you as per your reqirement.
                            <br /><br />
                            <span className='font-bold'>Try it for Free. Get Started Now!</span>
                        </p>

                        {currentUser == null ?

                            <div className=''>
                                <Button className='' type='button'
                                    colorScheme='red'
                                    width='100%'
                                    style={{ marginTop: 15 }}
                                    onClick={handleGoogleLogin}
                                    isLoading={loading}
                                >
                                    <span className='font-bold'>Login with Google</span>
                                </Button>

                                <Button className='' type='button'
                                    colorScheme='red'
                                    width='100%'
                                    style={{ marginTop: 15 }}
                                    onClick={() => { navigate('/home') }}
                                    isLoading={loading}
                                >
                                    <span className='font-bold'>Browse as Guest</span>
                                </Button>
                            </div>
                            :
                            <div className=''>
                                <Button className='' type='button'
                                    colorScheme='red'
                                    width='100%'
                                    style={{ marginTop: 15 }}
                                >
                                    <span className='font-bold'>Welcome {currentUser.displayName}!</span>
                                </Button>
                            </div>
                        }

                    </div>

                    <div className='w-1/2'>
                        <img className='h-72 mx-auto' src={emailPic} alt='' />
                    </div>

                </div>

            </div> */}
        </>
    )
}

export default LandingPage;