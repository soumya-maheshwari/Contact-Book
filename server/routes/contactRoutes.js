const express = require("express");
const { contactController } = require("../controllers");
const router = express.Router();
const { authVerifyToken } = require("../middlewares/authVerifyToken");

router.post("/createContact", authVerifyToken, contactController.createContact);
module.exports = router;
