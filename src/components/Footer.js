import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-gray-100 h-20 flex flex-row items-center justify-evenly text-xl text-black font-medium tracking-tighter space-x-6'>
            <div className=''>
                <h1 className=''>
                    Easy Emails | Avinash Kumar | 2022
                </h1>
            </div>
            <div className=''>
                <h1 className=''>
                    Do you have any Suggestion/ Feedback?
                </h1>
                <p className=''>Write it to us: <span className='text-indigo-700'>ak2449746@gmail.com</span></p>
            </div>
        </footer>
    )
}

export default Footer;