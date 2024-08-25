const express = require('express');
const {signIn, signup } = require('../controllers/auth.controller.js');

const router = express.Router();

router.post("/signup", signup);
router.post("/signIn", signIn);

module.exports = router;

