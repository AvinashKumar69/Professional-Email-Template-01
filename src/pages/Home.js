import React from 'react';
import SideBar from '../components/SideBar';
import '../styles/Home.css';

const Home = () => {


    return (
        <div className='h-screen wave-shape-container1111'
            // style={{ background: 'linear-gradient(to right, #140e38, #194089)' }}
            style={{ background: '#434750' }}
        >
            {/* <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
                <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style={{ stroke: 'none', fill: 'rgb(25, 64, 137)' }}></path>
            </svg> */}

            <SideBar />
        </div>
    )
}

export default Home;