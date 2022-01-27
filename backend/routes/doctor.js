const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const express = require('express')
const router = new express.Router()
const Doctor = require('../models/doctor')
const auth = require('../middleware/auth')

router.post('/doctor/signup', async (req, res) => {
    try {
        var doctor = new Doctor(req.body)
        const token = await doctor.generateAuthToken()
        const saved_Doctor = await doctor.save()

        res.status(201).json(token)
    }
    catch (e) {
        res.status(404).json(e)
    }

})

router.post('/doctor/login', async (req, res) => {
    try {
        const password = req.body.password
        const healthId = req.body.healthId

        const doctor = await Doctor.findOne({ healthId })
        if (!doctor)
            res.status(404).json({ "Error": "Doctor not found" })
        else {
            const isPasswordValid = await bcrypt.compare(password, doctor.password)
            console.log(isPasswordValid)

            if (isPasswordValid) {
                console.log(Doctor.tokens)
                const token = await Doctor.generateAuthToken()
                const saved_Doctor = await Doctor.save()
                console.log(saved_Doctor)

                res.status(200).json(saved_Doctor)
            }
            else {
                res.status(400).json({ "Message": 'Incorrect Credentials' })
            }

        }
    }
    catch (e) {
        res.status(400).json(e)
    }


})

router.get('/doctor/logout', auth, async (req, res) => {
    try {

        const healthId = req.healthId

        const doctor = await Doctor.findOne({ healthId })
        if (!doctor)
            res.status(404).json({ "Error": "Doctor not found" })
        else {

            doctor.tokens = []
            await Doctor.save()

            res.status(200).json({ "Message": "Logged Out succesfully!!" })

        }
    }
    catch (e) {
        res.status(404).json(e)
    }


})

module.exports = router
