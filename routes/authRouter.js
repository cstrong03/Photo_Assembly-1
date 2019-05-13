const express = require('express');
const authRouter = express.Router();
const { passport, jwtSign } = require("../auth/auth")


authRouter.post('/signup', async(req, res, next) => {
    passport.authenticate('signup', async(err, user, info) => {
        try {
            if (!user || err) {
                let err = new Error("Unable to create account.")
                err.status = 400
                return next(err)
            }
            console.log('user from /signup:', user)
            return res.json({user, message: "User successfully created!"})
        } catch (error) {
            return next(error)
        }
    })(req, res, next)
})

authRouter.post('/login', async (req, res, next) => {
    passport.authenticate('login', async(err, user, info) => {
        try {
            console.log('errrr:', err)
          if (err || !user) {
            const error = new Error('An Error Occurred')
            return next(error)
          }
    
          req.login(user, { session : false }, async (error) => {
            if ( error ) return next(error)
    
            const { email, id } = user
            const payload = { email, id }
    
            const token = jwtSign(payload)
            return res.json({ user, token })
          })
    
        } catch(error) {
          return next(error)
    
        }
      })(req, res, next)
})

module.exports = authRouter