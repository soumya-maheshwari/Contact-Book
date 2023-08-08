const Contact = require("../models/contactModel");
const { ErrorHandler } = require("../middlewares/ErrorHandler");
const { validatemail, validatePhone } = require("../utils/validations");

const createContact = async (req, res, next) => {
  try {
    const user = req.user;
    const userid = user._id;

    const { name, email, phone } = req.body;
    if (!validatemail(email)) {
      return next(new ErrorHandler(400, "incorrect email format is provided"));
    }
    if (!validatePhone(phone)) {
      return next(
        new ErrorHandler(400, "incorrect Phone number format is provided")
      );
    }
    const isUserExists = await Contact.findOne({ email: email.toLowerCase() });
    if (isUserExists) {
      return next(new ErrorHandler(400, "user by this email already exists"));
    }

    const isPhoneExists = await Contact.findOne({ phone });
    if (isPhoneExists) {
      return next(
        new ErrorHandler(400, "user by this phone number already exists")
      );
    }
    if (!(name && email && phone)) {
      return next(new ErrorHandler(400, "All the input fields are required."));
    } else {
      const newContact = await Contact.create({
        name,
        email,
        phone,
        user: userid,
      });

      console.log(newContact);

      res.status(200).json({
        success: true,
        newContact,
        msg: "Contact created",
      });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const editContact = async (req, res, next) => {
  try {
    const user = req.user;
    const userid = user._id;
    console.log(userid);
    const { name, email, phone } = req.body;
    if (!validatemail(email)) {
      return next(new ErrorHandler(400, "incorrect email format is provided"));
    }
    if (!validatePhone(phone)) {
      return next(
        new ErrorHandler(400, "incorrect Phone number format is provided")
      );
    }
    const updatedContact = await Contact.findOneAndUpdate(
      { _id: req.params.id, user: userid },
      { name, email, phone },
      { new: true }
    );

    console.log(updatedContact);

    if (!updatedContact) {
      new ErrorHandler(404, "Contact not found");
    }

    res.status(200).json({
      success: true,
      updatedContact,
      msg: "Contact updated",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const deleteContact = async (req, res, next) => {
  try {
    const user = req.user;
    const userid = user._id;
    console.log(req.params.id);
    const deletedContact = await Contact.findOneAndDelete({
      _id: req.params.id,
      user: userid,
    });

    if (!deletedContact) {
      new ErrorHandler(404, "Contact not found");
    }
    res.status(200).json({
      success: true,
      deletedContact,
      msg: "Contact deleted",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  createContact,
  editContact,
  deleteContact,
};
