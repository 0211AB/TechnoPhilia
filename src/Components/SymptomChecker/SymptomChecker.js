import React from 'react';
import { Link } from 'react-router-dom';
import './SymptomChecker.css'

const SymptomChecker = () => {
    return <>
        <header className="header">
            <Link to='/' className="logo">HealthCare</Link>
            <h1 className='text-centered'>AI powered Symptom Checker and Diagnosis</h1>
        </header>
        <div id="map" className='dark'>
            <iframe title='chatbox' src='https://dodxtx.shinyapps.io/EMSC/'> </iframe>
        </div>
    </>;
};

export default SymptomChecker;
