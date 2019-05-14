const express = require('express');
const authRouter = express.Router();
const { passport, jwtSign } = require("../auth/auth")
const { Users } = require('../models.js')
const bcrypt = require('bcrypt')


authRouter.post('/signup', async(req, res, next) => {
    passport.authenticate('signup', async(err, user, info) => {
        try {
            // const hasheduser = (user) => {bcrypt.hash(user.password, 12)};
            // hasheduser(user)
            if (!user || err) {
                let err = new Error("Unable to create account.")
                err.status = 400
                return next(err)
            }
            console.log('user from /signup:', username)
            return res.json({username, message: "User successfully created!"})
        } catch (error) {
            return next(error)
        }
    })(req, res, next)
})

authRouter.post('/login', async (req, res, next) => {
    // res.status(200).json({ message: "So far so good" })

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
            const payload = { username, id }

            const token = jwtSign(payload)
            // return the user object
            return res.json({ username, token })
          })

        } catch(error) {
          return next(error)

        }
      })(req, res, next)
})

module.exports = authRouter
