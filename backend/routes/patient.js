const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const express = require('express')
const router = new express.Router()
const Patient = require('../models/patient')
const auth = require('../middleware/auth')

router.post('patient/signup', async (req, res) => {
    try {
        console.log(req.body);
        var patient = new Patient(req.body)
        const token = await patient.generateAuthToken()
        const saved_patient = await patient.save()
        console.log(saved_patient)

        res.status(201).json(saved_patient)
    }
    catch (e) {
        res.status(400).json(e)
    }

})

router.post('patient/login', async (req, res) => {
    try {
        const password = req.body.password
        const healthId = req.body.healthId

        const patient = await Patient.findOne({ healthId })
        if (!patient)
            res.status(404).json({ "Error": "Patient not found" })
        else {
            const isPasswordValid = await bcrypt.compare(password, patient.password)
            console.log(isPasswordValid)

            if (isPasswordValid) {
                console.log(patient.tokens)
                const token = await patient.generateAuthToken()
                const saved_patient = await patient.save()
                console.log(saved_patient)

                res.status(200).json(saved_patient)
            }
            else {
                res.status(400).json({ "Message": 'Incorrect Credentials' })
            }

        }
    }
    catch (e) {
        res.status(404).json(e)
    }


})

router.get('patient/logout', auth, async (req, res) => {
    try {

        const healthId = req.healthId

        const patient = await Patient.findOne({ healthId })
        if (!patient)
            res.status(404).json({ "Error": "patient not found" })
        else {

            patient.tokens = []
            await patient.save()

            res.status(200).json({ "Message": "Logged Out succesfully!!" })

        }
    }
    catch (e) {
        res.status(404).json(e)
    }


})

module.exports = router
