 const express = require('express');
 const router = express.Router();


//  Routes
router.get('/',(req, res)=>{
    res.send("Hello from Thorve Prasad");
})

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