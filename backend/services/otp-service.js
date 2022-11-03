const crypto = require('crypto');

const smsSid = process.env.SMS_SID
const smsAuthToken = process.env.SMS_AUTH_TOKEN
const twilio = require('twilio')(smsSid , smsAuthToken , {
    lazyLoading : true
})

class OtpService {
     async generateOtp() {
        const otp = crypto.randomInt(1000, 9999);
        return otp;
    }

    async sendBySms(phone , otp){
        return twilio.messages.create({
            to: phone,
            from : process.env.SMS_FROM_NUMBER,
            body : `Your OTP is ${otp}`,
        })
    }

   
}

module.exports = new OtpService();