const express = require("express");
const router = express.Router();

const userValidator = require("./validator");
const controller = require("./controller");

router.post("/createUser", userValidator.create, controller.createUser);

module.exports = router;
