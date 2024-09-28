const express = require("express")
const router = express.Router()
const { homepage, contactUs, contactUshandler, careerHandler } = require("../controller/kryosync")

router.post("career-form", careerHandler())


module.exports = router