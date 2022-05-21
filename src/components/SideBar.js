import React from 'react';
import '../styles/SideBar.css';

const SideBar = () => {
    return (
        <div className='body'>
            <ul>
                <li style={{ '--i': '6' }}><a href='#'>Home</a></li>
                <li style={{ '--i': '5' }}><a href='#'>Home</a></li>
                <li style={{ '--i': '4' }}><a href='#'>Home</a></li>
                <li style={{ '--i': '3' }}><a href='#'>Home</a></li>
                <li style={{ '--i': '2' }}><a href='#'>Home</a></li>
                <li style={{ '--i': '1' }}><a href='#'>Home</a></li>
            </ul>
        </div >
    )
}

export default SideBar;