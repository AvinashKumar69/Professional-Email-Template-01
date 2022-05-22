import React from 'react';

const Footer = () => {
    return (
        <footer className="text-black bg-gray-100 body-font"
            // style={{ background: '#434750' }}
        >
            <div className="container px-5 py-5 mx-auto flex flex-row items-center justify-between xs:flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <span className="ml-3 text-xl">EasyEmails</span>
                </a>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-500 sm:py-2 sm:mt-0 xs:flex xs:flex-col items-center justify-center">© 2022 EasyEmails —
                    <a href='https://github.com/itHurtsMe2HurtU' className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@AvinashKumar (GitHub)</a>
                </p>
            </div>
        </footer>
    )
}

export default Footer;