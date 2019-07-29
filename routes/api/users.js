const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
// encrypt password
const bcrypt = require("bcryptjs");

// Load User Model
const User = require("../../models/User");

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public

// in local host do not have to type http://localhost:5000/api/users/test because that is already in the server.js file, well /api/users is.

// res.json will server json with a status of 200, everything ok.
router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

// create a route for our registration
// @route   GET api/users/register
// @desc    Register user
// @access  Public

router.post("/register", (req, res) => {
  //use mongoose to first find if the email exists, because we dont want to have somebody register if they have already registered.
  // looking for record of email
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: "200", // Size
        r: "pg", // Rating
        d: "mm" // Default
      });
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password
      });

      // create new user, generate salt with bcrypt, then hash the password with the salt, set the password to the hash password and respond to the user
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// have to export router in order server.js file to pick it up
module.exports = router;
