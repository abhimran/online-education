import React from 'react';
import './Nav.css';

const Nav = () => {
    return (
        <div className="navbar">
            <ul className="navItems">
                <li>
                    <a href="/Home">Home</a>
                </li>
                <li>
                    <a href="/Courses">Courses</a>
                </li>
                <li>
                    <a href="/About-Us">About Us</a>
                </li>
            </ul>
        </div>
    );
};

export default Nav;