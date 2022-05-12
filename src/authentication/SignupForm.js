import { Box, Button, FormControl, FormLabel, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithGoogle } from '../config/firebase-config';

const SignupForm = () => {

    const [show, setShow] = useState(false)
    const handleClickShowPassword = () => setShow(!show)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()


    const submitHandler = () => {
        // navigate('/')
        signInWithGoogle()
    }


    return (
        <Box className='flex flex-col items-center justify-center mx-auto m-5 p-5'
            maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>

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
                onClick={submitHandler}
                isLoading={loading}
            >
                SignUp / Create Account
            </Button>

        </Box>
    )
}

export default SignupForm;