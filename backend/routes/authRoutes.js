 const express = require('express');
 const router = express.Router();
 const {signIn}  = require('../controllers/authController');


//  Routes
router.get('/',signIn);

// router.get('/auth',(req, res)=>{
//     res.send("Hello from Pratham Ingole");
// })


router.get('/auth', async(req, res) => {
    const findResult = await .find();
    res.json(findResult);
    await cursor.forEach(console.dir);
    res.send("Hello from pratham");

})
module.exports = router;