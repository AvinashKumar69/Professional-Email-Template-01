import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, FormControl, FormLabel, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithGoogle } from '../config/firebase-config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/firebase-config';
import { useToast } from '@chakra-ui/react'


const Login = () => {

    const [show, setShow] = useState(false)
    const handleClickShowPassword = () => setShow(!show)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const toast = useToast()
    const [loginError, setLoginError] = useState(false)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleSignup = () => {

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('user-->', user);

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
            });
    }

    const handleLogin = () => {

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('user-->', user);

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
                return (alert(
                    <Alert status='error'>
                    <AlertIcon />
                    <AlertTitle>Error!</AlertTitle>
                    <AlertDescription>Email/ Password Mismatch.</AlertDescription>
                </Alert>
                ))
            });
    }


    return (
        <Box className='flex flex-col items-center justify-center mx-auto m-5 p-5 w-96'
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
            >
                Create Account / SignUp
            </Button>

            <Button
                colorScheme='blue'
                width='100%'
                style={{ marginTop: 15 }}
                onClick={handleLogin}
                isLoading={loading}
            >
                Login with Email & Password
            </Button>

            {/* <Alert status='error' className='mt-2 rounded-lg'>
                <AlertIcon />
                <AlertTitle>Error!</AlertTitle>
                <AlertDescription>Email/ Password Mismatch.</AlertDescription>
            </Alert> */}

            <Button
                colorScheme='red'
                width='100%'
                style={{ marginTop: 15 }}
                onClick={() => signInWithGoogle()}
                isLoading={loading}
            >
                Login with Google
            </Button>

        </Box>
    )
}

export default Login;