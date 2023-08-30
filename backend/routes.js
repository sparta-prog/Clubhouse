const router = require('express').Router();

router.post('/api/send-otp', (req,res) => {
    res.send('Hello from send - otp');
})

module.exports = router;