import React from 'react';
import rjslogo from '../assets/images/reactjs-icon.svg'

const Navbar = function () {
    return (
        <div>
            <nav className='navbar'>
                <img src={rjslogo} alt='reactjs-icon' />
                <h3>ReactFacts</h3>
                <h4>React Course - Project 1</h4>
            </nav>
        </div>
    )
}

export default Navbar