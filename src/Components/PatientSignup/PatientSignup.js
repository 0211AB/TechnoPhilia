import React from 'react';
import './PatientSignup.css'
import { Link } from 'react-router-dom';
import logo from '../../images/personal1.svg'
import logo2 from '../../images/med.svg'

const PatientSignup = () => {
  return <>
    <div className="page-content">
      <div className='text-centered-login'>PATIENT SIGNUP</div>
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
                      <legend>Father/Spouse Name</legend>
                      <input type="text" className="form-control" id="last-name" name="last-name" placeholder="Father's Name" required />
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
                      <legend>Aadhar Number</legend>
                      <input type="text" className="form-control" id="aadhar" name="aadhar" placeholder="12 digit Aadhar Number" required />
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
                      <legend>Address</legend>
                      <input type="text" className="form-control" id="aadhar" name="aadhar" placeholder="Address" required />
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
                      <legend>Height</legend>
                      <input type="number" className="form-control" id="first-name" name="first-name" placeholder="Height in cm" required />
                    </fieldset>
                  </div>

                  <div className="form-holder">
                    <fieldset>
                      <legend>Weight</legend>
                      <input type="number" className="form-control" id="last-name" name="last-name" placeholder="Weight in kg" required />
                    </fieldset>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-holder form-holder-2">
                      <fieldset>
                      <legend>Identification Mark</legend>
                      <input type="text" className="form-control" id="phone" name="phone" placeholder="Please mention any birthmark/scar" required />
                    </fieldset>
                  </div>
                  <div className="form-holder">
                    <fieldset>
                      <legend>Family Medical History</legend>
                      <input type="text" className="form-control" id="aadhar" name="aadhar" placeholder="Family Medical History(if any)" required />
                    </fieldset>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-holder">
                    <fieldset>
                      <legend>Blood Group</legend>
                      <input type="text" className="form-control" id="aadhar" name="aadhar" placeholder="Enter your blood group" required />
                    </fieldset>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-holder">
                    <fieldset>
                      <legend>Password</legend>
                      <input type="text" className="form-control" id="aadhar" name="aadhar" placeholder="Please create a password" required />
                    </fieldset>
                  </div>
                </div>
                <div className="form-row btn-patient-row">
                <input type='submit' className='btn btn-patient'/>
                </div>
              </div>
              <div className="wizard-header">
                <h3 className="heading heading-light">Medical Data</h3>
                <p className='text-centered-p' >Please enter your medical Information.</p>
                <img src={logo2} />
              </div>
            </div>
          </section>
        </form>
      </div>
    </div>
  </>;
};

export default PatientSignup;
