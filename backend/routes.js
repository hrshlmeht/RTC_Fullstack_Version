const router = require('express').Router();

const authControllers = require('./controllers/auth-controllers');


router.post('/api/send-otp', authControllers.sendOtp)


module.exports = router