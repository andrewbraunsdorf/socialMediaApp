// copied all from register file, get rid of name and email 2
const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  // want valid email as well... it has to be if not valid email
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  // have to have email field is required after invalid
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }
  // check to see if password is there
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
