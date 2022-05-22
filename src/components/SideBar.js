import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SideBar.css';

const SideBar = () => {
    return (
        <div className='body xs:h-[600px]'>
            <ul className='sidebar-ul'>
                <li className='sidebar-li' style={{ '--i': '6' }}>
                    <Link className='sidebar-link' to='/sickleave'>Sick Leave</Link>
                </li>
                <li className='sidebar-li' style={{ '--i': '5' }}>
                    <Link className='sidebar-link' to='/emergencyleave'>Emergency Leave</Link>
                </li>
                <li className='sidebar-li' style={{ '--i': '4' }}>
                    <Link className='sidebar-link' to='/resignationletter'>Resignation Letter</Link>
                </li>
                <li className='sidebar-li' style={{ '--i': '3' }}>
                    <Link className='sidebar-link' to='/forcedresignationletter'>Forced Resignation Letter</Link>
                </li>
                <li className='sidebar-li' style={{ '--i': '2' }}>
                    <Link className='sidebar-link' to='/jobapplication'>Job Application</Link>
                </li>
                <li className='sidebar-li' style={{ '--i': '1' }}>
                    <Link className='sidebar-link' to='/coverletter'>Cover Letter</Link>
                </li>
            </ul>
        </div >
    )
}

export default SideBar;