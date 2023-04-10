 const express = require('express');
 const router = express.Router();
 const {signIn}  = require('../controllers/authController');


//  Routes
router.get('/',signIn);

module.exports = router;