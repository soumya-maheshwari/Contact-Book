const express = require("express");
const { contactController, authController } = require("../controllers");
const router = express.Router();
const { authVerifyToken } = require("../middlewares/authVerifyToken");

router.post("/createContact", authVerifyToken, contactController.createContact);
router.patch(
  "/editContact/:id",
  // authVerifyToken,
  contactController.editContact
);
router.delete(
  "/deleteContact/:id",
  authVerifyToken,
  contactController.deleteContact
);
router.get("/allContacts", authVerifyToken, contactController.getAllContacts);
router.put(
  "/addMoreDetails/:id",
  authVerifyToken,
  contactController.addMoreDetails
);
router.get("/searchContact", authVerifyToken, contactController.searchContact);

module.exports = router;
