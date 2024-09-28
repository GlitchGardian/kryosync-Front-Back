const express = require("express")
const router = express.Router()
const { homepage, contactUs } = require("../controller/kryosync")


router.get("/", homepage())

module.exports = router