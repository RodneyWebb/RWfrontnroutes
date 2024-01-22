
const secret = "1411a7d652797339e5314ffa232b63de416397c26aed4f9ac25584cad5621c5b8e96bf5bedd367027f9e2630d13c7234d3f2664947fea88fb4116273b3b0f293"
const jwt = require('jsonwebtoken')

function generateAccessToken(userId) {
    return jwt.sign(userId, secret, {})
}

function authenticateToken(req, res, next) {
    const token = req.get('Authorization')

    if (token === null) {
        return res.sendStatus(401)
    }

    jwt.verify(token, secret, (error, user) => {
        if(error) {
            return res.sendStatus(405)
        }

        req.user = user
        next()
    })
}

module.exports = {
    generateAccessToken,
    authenticateToken
}