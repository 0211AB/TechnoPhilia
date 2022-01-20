import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './Components/Home/Home'
import PatientLogin from './Components/PatientLogin/PatientLogin'
import PatientMain from './Components/PatientMain/PatientMain'
import DoctorLogin from './Components/DoctorLogin/DoctorLogin'
import DoctorMain from './Components/DoctorMain/DoctorMain'

import './App.css'

export const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/login/patient' element={<PatientLogin />}></Route>
            <Route path='/login/doctor' element={<DoctorLogin />}> </Route>
            <Route path='/doctors' element={<DoctorMain />}></Route>
            <Route path='/patients' element={<PatientMain />}></Route>
        </Routes>
    )
}


