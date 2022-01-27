const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const express = require('express')
const router = new express.Router()
const Patient = require('../models/patient')
const auth = require('../middleware/auth')
const { v4: uuidv4 } = require('uuid');

router.post('/patient/signup', async (req, res) => {
    try {
        const body = { ...req.body, "healthId": uuidv4().split('-')[4] }
        var patient = new Patient(body)
        const token = await patient.generateAuthToken()
        const saved_patient = await patient.save()

        res.status(201).json({ token, "hid": saved_patient.healthId })
    }
    catch (e) {
        res.status(400).json(e)
    }

})

router.post('/patient/login', async (req, res) => {
    try {
        const password = req.body.password
        const healthId = req.body.healthId

        const patient = await Patient.findOne({ healthId })
        if (!patient)
            res.status(400).json({ "Error": "Invalid credentials" })
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

router.get('/patient/logout', auth, async (req, res) => {
    try {

        const healthId = req.healthId

        const patient = await Patient.findOne({ healthId })
        if (!patient)
            res.status(404).json({ "Error": "Invalid Credentials" })
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
