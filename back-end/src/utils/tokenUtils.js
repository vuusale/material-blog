const jwt = require('jsonwebtoken');

exports.getSignedJWT = (user_id, role=null) => {
    const payload = {
        user_id,
        role
    }
    const options = {
        expiresIn: process.env.JWP_EXPIRE
    }
    return jwt.sign(payload, process.env.JWT_SECRET, options);
}