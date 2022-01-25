import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom';

import './ContactUs.css'

const ContactUs = () => {
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
    return <>
        <header className='header-contact-us'>
            <div className="container">
                <Link to='/' className="logo"><span>H</span>ealth<span>C</span>are</Link>
                <nav className={navClasses}>
                    <ul>
                        <li><Link to="/facilities">Connect With Us</Link></li>
                    </ul>
                </nav>
                <FaBars className='fa-bars' onClick={clickHandler}></FaBars>
            </div>
        </header>
        <section class="contact" id="contact">
            <div class="row">

                <iframe class='map' title='location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.489025243892!2d88.41085255060929!3d22.560806185116146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02743203255595%3A0x9c37b30c00660fab!2sJadavpur%20University%20Salt%20Lake%20Campus!5e0!3m2!1sen!2sin!4v1643133089372!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>

                <form>
                    <h3>get in touch</h3>
                    <div class="inputBox">
                        <input type="text" placeholder="name" />
                        <input type="email" placeholder="email" />
                    </div>
                    <div class="inputBox">
                        <input type="text" placeholder="health-id" />
                        <input type="text" placeholder="subject" />
                    </div>
                    <textarea name="" placeholder="message" id="" cols="30" rows="10"></textarea>
                    <input type="submit" value="send message" class="btn" />
                </form>

            </div>

        </section>

    </>;
};

export default ContactUs;
