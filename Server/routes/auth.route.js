const express = require('express');
const { google, signIn, signup, signOut } = require('../controllers/auth.controller.js');

const router = express.Router();

router.post("/signup", signup);
router.post("/signIn", signIn);
router.post('/google', google);
router.get('/signout', signOut)


module.exports = router;

