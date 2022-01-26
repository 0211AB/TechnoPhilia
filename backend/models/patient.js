const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const PatientSchema = new mongoose.Schema({
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
    gaurdianDetails: {
        type: String,
        required: true,
    },
    aadharNumber: {
        type: String,
        required: true,
        minlength: 12,
        maxlength: 12
    },
    bloodGroup: {
        type: String,
        required: true,
    },
    identifcationMark: {
        type: String,
    },
    height: {
        type: String,
    },
    weight: {
        type: String,
    },
    familyHistory: {
        type: String,
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

PatientSchema.pre("save", async function (next) {
    if (!this.isModified('password')) return next()

    this.password = await bcrypt.hash(this.password, 10)
    next()
})

PatientSchema.pre("save", async function (next) {
    if (!this.isModified('aadharNumber')) return next()

    this.aadharNumber = await bcrypt.hash(this.aadharNumber, 10)
    next()
})

PatientSchema.methods.generateAuthToken = async function () {
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

const Patient = new mongoose.model('patient', PatientSchema)

module.exports = Patient