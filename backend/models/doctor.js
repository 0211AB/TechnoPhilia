const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const DoctorSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    address: {
        type: String,
        trim: true,
        required: true,
    },
    dob: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid email")
            }
        },
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    healthId: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 10
    },
    clinics: {
        type: String,
        required: true,
    },
    identifcationMark: {
        type: String,
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

DoctorSchema.pre("save", async function (next) {
    if (!this.isModified('password')) return next()

    this.password = await bcrypt.hash(this.password, 10)
    next()
})

DoctorSchema.pre("save", async function (next) {
    if (!this.isModified('aadharNumber')) return next()

    this.aadharNumber = await bcrypt.hash(this.aadharNumber, 10)
    next()
})

DoctorSchema.methods.generateAuthToken = async function () {
    try {
        if (this.tokens.length > 1)
            this.tokens.splice(0, 1)
        const token = jwt.sign({ email: this.email }, process.env.JWT_SECRET_KEY)
        this.tokens.push({ token: token })
        return token
    }
    catch (e) {
        return e
    }
}

const Doctor = new mongoose.model('doctor', DoctorSchema)

module.exports = Doctor