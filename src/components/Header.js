import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {

    const navigate = useNavigate()


    return (
        <nav className='flex flex-row items-center justify-evenly h-16 text-white font-mono tracking-widest'
            style={{ background: 'linear-gradient(to right, #140e38, #194089)' }}
        >
            <Link to='/' className='font-black text-2xl xyzabc-half-border'>
                LOGO
            </Link>

            <button className='text-2xl font-black xyzabc-half-border' type='button'
                onClick={() => { navigate('/login') }}
            >
                Log In
            </button>

        </nav>
    )
}

export default Header;