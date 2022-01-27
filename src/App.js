import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './Components/Home/Home'
import PatientLogin from './Components/PatientLogin/PatientLogin'
import PatientMain from './Components/PatientMain/PatientMain'
import DoctorLogin from './Components/DoctorLogin/DoctorLogin'
import DoctorMain from './Components/DoctorMain/DoctorMain'
import Facilities from './Components/Home/Facilities'
import PatientSignup from './Components/PatientSignup/PatientSignup'
import DoctorSignup from './Components/DoctorSignup/DoctorSignup'
import SymptomChecker from './Components/SymptomChecker/SymptomChecker'
import ContactUs from './Components/ContactUs/ContactUs'

import './App.css'



export const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/login/patient' element={<PatientLogin />}></Route>
            <Route path='/login/doctor' element={<DoctorLogin />}> </Route>
            <Route path='/doctors' element={<DoctorMain />}></Route>
            <Route path='/patients' element={<PatientMain />}></Route>
            <Route path='/facilities' element={<Facilities />}></Route>
            <Route path="/signup/patient" element={<PatientSignup />}></Route>
            <Route path='/signup/doctor' element={<DoctorSignup />}></Route>
            <Route path='/symptoms' element={<SymptomChecker />}></Route>
            <Route path='/contact-us' element={<ContactUs />}></Route>
        </Routes>
    )
}


