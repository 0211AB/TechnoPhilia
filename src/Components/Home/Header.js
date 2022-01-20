import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'

import './Header.css'

const Header = () => {
    const [navClasses, setnavClasses] = useState('nav')
    const [isOpen, setisOpen] = useState('false')

    const clickHandler = () => {
        setisOpen(!isOpen)
        if (isOpen) {
            setnavClasses('nav nav-toggle')
        }
        else
            setnavClasses('nav')
    }

    return <header>

        <div className="container">

            <Link to='/' className="logo"><span>H</span>ealth<span>C</span>are</Link>

            <nav className={navClasses}>
                <ul>
                    <li><Link to="/">HealthCare Facilities</Link></li>
                    <li><Link to='/'>Symptoms</Link></li>
                    <li><Link to='/'>contact us</Link></li>
                </ul>
            </nav>

            <FaBars className='fa-bars' onClick={clickHandler}></FaBars>

        </div>

    </header>;
};

export default Header;
