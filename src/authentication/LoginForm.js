import { EmailIcon } from '@chakra-ui/icons';
import { Box, Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, useToast } from '@chakra-ui/react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { MdMarkEmailRead } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../config/firebase-config';
import { AuthContext } from '../context/AuthContext';


const Login = () => {

    const { dispatch } = useContext(AuthContext)

    const [show, setShow] = useState(false)
    const handleClickShowPassword = () => setShow(!show)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const toast = useToast()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleSignup = () => {

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('user of createUserWithEmailAndPassword-->', user);
                dispatch({ type: 'LOGIN', payload: user })

                toast({
                    title: 'Account created!',
                    description: "Your Account has been Created Successfully!!",
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                })

                navigate('/')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage, errorCode);
                alert('Error while Creating Account, Please Try Again!')
            });
    }

    const handleLogin = () => {

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('user of signInWithEmailAndPassword-->', user);
                dispatch({ type: 'LOGIN', payload: user })

                toast({
                    title: 'SignIn Successfull!',
                    description: "Your SignIn with Email & Password is Successfull!!",
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                })

                navigate('/')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage, errorCode);

                toast({
                    title: 'Error!',
                    description: "Email Id/ Password Mismatched, Please Try Again!!",
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                })
            });
    }

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


    return (
        <Box className='flex flex-col items-center justify-center mx-auto m-5 p-5 w-96 shadow-xl rounded-full'
            borderWidth='1px' borderRadius='lg' overflow='hidden'>

            <FormControl id='email' isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                    placeholder='Enter Your Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormControl>

            <FormControl id='password' isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input
                        type={show ? "text" : "password"}
                        placeholder='Enter Your Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm'
                            onClick={handleClickShowPassword}
                        >
                            {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <Button
                colorScheme='blue'
                width='100%'
                style={{ marginTop: 15 }}
                onClick={handleSignup}
                isLoading={loading}
                leftIcon={<MdMarkEmailRead style={{ height: '30px', width: '30px' }} />}
            >
                <span className='font-bold'>SignUp with Email & Password</span>
            </Button>

            <Button
                colorScheme='blue'
                width='100%'
                style={{ marginTop: 15 }}
                onClick={handleLogin}
                isLoading={loading}
                leftIcon={<EmailIcon w={7} h={7} />}
            >
                <span className='font-bold'>Login with Email & Password</span>
            </Button>

            <h1 className='font-bold text-black text-xl'>OR</h1>

            <Button colorScheme='red'
                leftIcon={<FaGoogle style={{ height: '30px', width: '30px' }} />}
                width='100%'
                style={{ marginTop: 15 }}
                onClick={handleGoogleLogin}
                isLoading={loading}
            >
                <span className='font-bold'>Login with Google</span>
            </Button>

        </Box>
    )
}

export default Login;