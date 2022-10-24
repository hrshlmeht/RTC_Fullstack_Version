class AuthController{

    sendOtp(req,res)
    {
        const {phone} = req.body;
        if (!phone){
            res.status(400).json({message : 'Phondde field is required'})

        }
        res.send("hi from OTP ROUTE")

    }
}

module.exports = new AuthController();