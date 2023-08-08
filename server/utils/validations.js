function validatepassword(password) {
  let regexPasswod =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#%*?&])[A-Za-z\d@#$!%*?&]{8,}$/;
  result = regexPasswod.test(password);
  return result;
}

function validatemail(email) {
  let regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  result = regexMail.test(email);
  return result;
}

function validatePhone(phone) {
  let regexPhone = /^[0-9]{10}$/;
  result = regexPhone.test(phone);
  return result;
}

module.exports = {
  validatepassword,
  validatemail,
  validatePhone,
};
