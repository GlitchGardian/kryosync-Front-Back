const { name } = require("ejs")
const mongoose = require("mongoose")

const contactUs = mongoose.Schema({
    f_name: {
        type: String,
        require: true
    },
    l_name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    mobileNumber: {
        type: Number,
        require: true,
        unique: true
    },
    domain: {
        type: String,
        require: true
    },
    About_person: {
        type: String,
        require: true
    }
},
    {
        timestamps: true
    })

const contactForm = mongoose.model("contactUs", contactUs)

module.exports = contactForm