import React from 'react';
import { Link } from 'react-router-dom';

import './PatientLogin.css'

const PatientLogin = () => {
  return <div className="container login-page bg-img">
    <div className='title'>
      <h1>Patient Login</h1>
    </div>
    <div className="signin-signup">
      <form action="#" className="sign-in-form">
        <div className="input-field">
          <i className="fas fa-user"></i>
          <input type="text" placeholder="Health ID" />
        </div>
        <div className="input-field">
          <i className="fas fa-user"></i>
          <input type="text" placeholder="Aadhaar Number" />
        </div>
        <div className="input-field">
          <i className="fas fa-lock"></i>
          <input type="password" placeholder="Password" />
        </div>
        <button className="button-form">Login As Patient</button>
        <Link to="/signup/patient" className='signup-link'>Don't have an account ? Click to sign up</Link>
      </form>
    </div>

  </div>;
};

export default PatientLogin;
