const express = require("express");
const router = express.Router();

const controller = require("./controller");

router.get("/getFormData", controller.getFormData);
router.post("/postFormData", controller.postFormData);

module.exports = router;
