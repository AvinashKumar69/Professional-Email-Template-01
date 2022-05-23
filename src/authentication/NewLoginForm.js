import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NewLoginForm.css';

const NewLoginForm = () => {
    return (
        <div className='newLoginForm-body h-screen'>
            <ul className='newLoginForm-ul'>
                <li className='newLoginForm-li'>
                    <Link className='newLoginForm-link' to='#'>
                        <i className="fa-brands fa-google newLoginForm-i" />
                        <span className='newLoginForm-span'>Login with Google</span>
                    </Link>
                </li>
                <li className='newLoginForm-li'>
                    <Link className='newLoginForm-link' to='#'>
                        <i className="fa-brands fa-facebook newLoginForm-i" />
                        <span className='newLoginForm-span'>Login with Facebook</span>
                    </Link>
                </li>
                <li className='newLoginForm-li'>
                    <Link className='newLoginForm-link' to='#'>
                        <i className="fa-brands fa-github newLoginForm-i" />
                        <span className='newLoginForm-span'>Login with GitHub</span>
                    </Link>
                </li>
                <li className='newLoginForm-li'>
                    <Link className='newLoginForm-link' to='#'>
                        <i className="fa-brands fa-twitter newLoginForm-i" />
                        <span className='newLoginForm-span'>Login with Twitter</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NewLoginForm;