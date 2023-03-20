 const express = require('express');
 const router = express.Router();

//  Routes
app.get('/',(req, res)=>{
    res.send("Hello from Prasad");

})

module.exports = router;