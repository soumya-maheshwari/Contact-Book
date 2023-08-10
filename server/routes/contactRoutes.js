const express = require("express");
const { contactController } = require("../controllers");
const router = express.Router();
const { authVerifyToken } = require("../middlewares/authVerifyToken");

router.post("/createContact", authVerifyToken, contactController.createContact);
router.put("/editContact/:id", authVerifyToken, contactController.editContact);
router.delete(
  "/deleteContact/:id",
  authVerifyToken,
  contactController.deleteContact
);
router.get("/allContacts", authVerifyToken, contactController.getAllContacts);
router.put(
  "/addMoreDetsild/:id",
  authVerifyToken,
  contactController.addMoreDetails
);

module.exports = router;
