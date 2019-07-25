const express = require("express");
const router = express.Router();

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public

// in local host do not have to type http://localhost:5000/api/users/test because that is already in the server.js file, well /api/users is.

// res.json will server json with a status of 200, everything ok.
router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

// have to export router in order server.js file to pick it up
module.exports = router;
