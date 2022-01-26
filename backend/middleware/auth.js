const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
    try {
        console.log(JSON.stringify(req.headers))
        const token = req.headers.authorization.split(':')[1]
        console.log(token)

        if (!token) return res.status(403).json({ "Error": "Authorization Revoked" })

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        if (!decoded) return res.status(403).json({ "Error": "Token Error" })

        req.healthId = decoded.healthId
        next();
    } catch (error) {
        return res.status(403).json({ "Error": "Authorization Revoked " })
    }
} 