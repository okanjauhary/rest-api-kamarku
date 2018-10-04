const jwt = require('jsonwebtoken')

const Auth = (req, res, next) => {
    let token = req.headers.authorization
    if(typeof token !== 'undefined'){
      token = token.split(' ')[1]
      jwt.verify(token, 'keysecret', (err, decoded) => {
        if(err){
          res.status(403).json({success: false})
        }else{
            req.decoded = decoded
            next()
        }
      })
    }else{
      res.status(403).json({success: false})
    }
}

module.exports = Auth
