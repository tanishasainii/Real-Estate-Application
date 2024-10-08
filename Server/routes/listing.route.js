const express = require('express');
const {createListing, deleteListing, updateListing, getListing} = require('../controllers/listing.controller.js');
const verifyToken = require('../utils/verifyUser.js');

const router = express.Router();

router.post('/create', verifyToken, createListing);
router.delete('/delete/:id', verifyToken, deleteListing);
router.post('/update/:id', verifyToken, updateListing);
router.get('/get/:id', getListing);


export default router;