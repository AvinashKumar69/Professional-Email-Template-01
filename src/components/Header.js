import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Header.css';
import LOGO from '../assets/default.png';
import { signOut } from "firebase/auth";
import { auth } from '../config/firebase-config';
import { AuthContext } from '../context/AuthContext';
import { toast } from '@chakra-ui/react';

const Header = (props) => {
    console.log('props at Header-->', props);
    const { currentUser } = props
    console.log('currentUser at Header-->', currentUser);

    const navigate = useNavigate()
    const { dispatch } = useContext(AuthContext)

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

                navigate('/login')
            })
            .catch((error) => {
                // An error happened.
                console.log(error);
            });
    }


    return (
        <nav className='flex flex-row items-center justify-evenly h-24 text-white font-mono tracking-widest'
            // style={{ background: 'linear-gradient(to right, #140e38, #194089)' }}
            style={{ backgroundColor: 'rgb(25, 64, 137)' }}
        >
            <Link to='/' className='xyzabc-half-border'>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-2xl font-black'>Email Template Generator</h1>
                    <h2 className='text-sm font-bold'>All Rights Reserved By Avinash Kumar</h2>
                </div>
            </Link>

            {
                currentUser !== null ?
                    <div className='flex flex-row items-center justify-center space-x-6'>
                        <h1 className='xyzabc-half-border'>Welcome
                            <span className='font-bold font-sans'> {currentUser.displayName}!</span>
                        </h1>
                        <h1 className='xyzabc-half-border cursor-pointer'
                            onClick={handleLogOut}
                        >LogOut
                        </h1>
                        <img className='h-12 w-12 rounded-full' src={currentUser.photoURL} alt='profile' />
                    </div>

                    :

                    <Link to='/login' className='font-black text-2xl xyzabc-half-border'>
                        Login
                    </Link>
            }

        </nav>
    )
}

export default Header;