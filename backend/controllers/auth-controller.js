const otpService = require('../services/otp-service');
const hashService = require('../services/hash-service');

class AuthController {
    async sendOtp(req, res) {

        const { phone } = req.body;
        if (!phone) {
            res.status(400).json({ message: 'Phone field empty' })
        }

        const otp = await otpService.generateOtp();

        const ttl = 1000*60*2;
        const expires = Date.now() + ttl;
        const data = `${phone}.${otp}.${expires}`;
        const hash = hashService.hashOtp(data);

        // send OTP
        try {
            await otpService.sendBySms(phone, otp);
            return res.json({
                hash: `${hash}.${expires}`,
                phone,
                otp,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: 'message sending failed' });
        }

        res.json({hash: hash});
    }
}

module.exports = new AuthController();