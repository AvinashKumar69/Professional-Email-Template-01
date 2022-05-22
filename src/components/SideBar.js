import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SideBar.css';

const SideBar = () => {
    return (
        <div className='body xs:h-[600px]'>
            <ul>
                <li style={{ '--i': '6' }}>
                    <Link to='/sickleave'>Sick Leave</Link>
                </li>
                <li style={{ '--i': '5' }}>
                    <Link to='/emergencyleave'>Emergency Leave</Link>
                </li>
                <li style={{ '--i': '4' }}>
                    <Link to='/resignationletter'>Resignation Letter</Link>
                </li>
                <li style={{ '--i': '3' }}>
                    <Link to='/forcedresignationletter'>Forced Resignation Letter</Link>
                </li>
                <li style={{ '--i': '2' }}>
                    <Link to='/jobapplication'>Job Application</Link>
                </li>
                <li style={{ '--i': '1' }}>
                    <Link to='/coverletter'>Cover Letter</Link>
                </li>
            </ul>
        </div >
    )
}

export default SideBar;