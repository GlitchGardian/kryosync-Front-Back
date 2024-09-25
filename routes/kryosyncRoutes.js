const express = require("express")
const router = express.Router()
const { homepage, contactUs, contactUshandler } = require("../controller/kryosync")

router.post("/contect-us-form", contactUshandler())


module.exports = router