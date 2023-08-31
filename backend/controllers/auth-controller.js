const otpService = require('../services/otp-service');
const hashService = require('../services/hash-service');

class AuthController {
    async sendOtp(req, res) {

        const { phone } = req.body;
        if (!phone) {
            res.status(400).json({ message: 'Phone field empty' })
        }

        const otp = await otpService.generateOtp();

        const hash = hashService.hashOtp();

        res.json({otp: otp});
    }
}

module.exports = new AuthController();