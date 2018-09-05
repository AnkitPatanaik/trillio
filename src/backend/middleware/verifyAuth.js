const jwt = require("jsonwebtoken");
const config = require("../../../config");
const SECRET = config.JWT_SECRET;

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        // verifies and deodes the token, instead of just decoding it in decode(token, SECRET)
        const decoded = jwt.verify(token, SECRET);
        req.userData = decoded;
        next(); // callback which will continue to the next step
    } catch (error) {
        return res.status(401).json({
            message: 'Auth failed'
        });
    }
};