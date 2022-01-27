import React from 'react';
import logo from '../../images/doctor-signup.svg'
import logo2 from '../../images/doctor-signup-2.svg'
import { Link } from 'react-router-dom';

const DoctorSignup = () => {
  return <>
    <div className="page-content">
      <div className='text-centered-login'>SignUp As Doctor!</div>
      <div className="form-v1-content">
        <form className="form-register">

          <section className='form-section1'>
            <div className="inner">
              <div className="wizard-header">
                <h3 className="heading">Personal Information</h3>
                <p className='text-centered-p' >Please enter your infomation and proceed to the next step so we can build your account.</p>
                <img src={logo} />
              </div>
              <div className='details'>
                <div className="form-row">
                  <div className="form-holder">
                    <fieldset>
                      <legend>Full Name</legend>
                      <input type="text" className="form-control" id="first-name" name="first-name" placeholder="Full Name" required />
                    </fieldset>
                  </div>

                  <div className="form-holder">
                    <fieldset>
                      <legend>Address</legend>
                      <input type="text" className="form-control" id="last-name" name="last-name" placeholder="Address" required />
                    </fieldset>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-holder form-holder-2">
                    <fieldset>
                      <legend>Email</legend>
                      <input type="text" name="your_email" id="your_email" className="form-control" pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" placeholder="example@email.com" required />
                    </fieldset>
                  </div>

                  <div className="form-holder form-holder-2">
                    <fieldset>
                      <legend>Phone Number</legend>
                      <input type="text" className="form-control" id="phone" name="phone" placeholder="+91 123-456-7890" required />
                    </fieldset>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-holder">
                    <fieldset>
                      <legend>Registration Number</legend>
                      <input type="text" className="form-control" id="aadhar" name="aadhar" placeholder="Medical Registration Number" required />
                    </fieldset>
                  </div>

                  <div className="form-holder">
                    <fieldset>
                      <legend>Date Of Birth</legend>
                      <input type="date" className="form-control" id="dob" name="dob" required />
                    </fieldset>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-holder">
                    <fieldset>
                      <legend>password</legend>
                      <input type="password" className="form-control" id="aadhar" name="aadhar" placeholder="enter a password" required />
                    </fieldset>
                  </div>

                  <div className="form-holder">
                    <fieldset>
                      <legend>Gender</legend>
                      <input type="text" className="form-control" id="dob" placeholder='Male/Female/Binary' required />
                    </fieldset>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className='form-section2'>
            <div className="inner2">
              <div className='details'>
                <div className="form-row">
                  <div className="form-holder">
                    <fieldset>
                      <legend>College of Graduation</legend>
                      <input type="text" className="form-control" id="first-name" name="first-name" placeholder="College from where you graduated" required />
                    </fieldset>
                  </div>

                  <div className="form-holder">
                    <fieldset>
                      <legend>Year of graduation</legend>
                      <input className="form-control" type="number" min="1900" max="2022" step="1"   placeholder="year of graduation" required />
                    </fieldset>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-holder form-holder-2">
                    <fieldset>
                      <legend>Speciality(if any)</legend>
                      <input type="text" className="form-control" id="phone" name="phone" placeholder="mention the field of speciality" required />
                    </fieldset>
                  </div>
                  <div className="form-holder">
                    <fieldset>
                      <legend>Clinics/Hospitals</legend>
                      <input type="text" className="form-control" id="aadhar" name="aadhar" placeholder="Enter all the clinics  and/or hospitals visiting" required />
                    </fieldset>
                  </div>
                </div>

                <div className="form-row btn-patient-row">
                  <input type='submit' className='btn btn-patient' />
                  <Link to="/signup/patient" className='signup-link'>SignUp as Patient</Link>
                </div>
              </div>
              <div className="wizard-header">
                <h3 className="heading heading-light">Educational Qualifications</h3>
                <img src={logo2} />
              </div>
            </div>
          </section>
        </form>
      </div>
    </div>
  </>;
};

export default DoctorSignup;
