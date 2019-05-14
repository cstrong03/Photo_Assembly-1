const express = require('express')
const authRouter = express.Router()
const { passport, jwtSign } = require('../auth/auth.js')
const bcrypt = require('bcrypt')
const { User } = require('../models.js')



authRouter.post('/signup', async(req, res, next) => {
  passport.authenticate('signup', async(err, user, info) => {
    try {
        const hashedUser = async (singleUser) => {
            singleUser.password = await bcrypt.hash(singleUser.password, 12);
        }
        await hashedUser(user);
        console.log(user)
      if (err) {
        let error = new Error(err.message || info.message)
        error.status = 400
        return next(error)
      }

      if (!user) {
        return res.status(401).json({message: info.message})
      }
      const { username, id } = user
      const payload = { username, id }

      const token = jwtSign(payload)
      return res.json({user: user, token: token, message: info.message})
    } catch (error) {
      return next(error)
    }
  })(req, res, next)
})

// matches '/auth/login' route
authRouter.post('/login', (req, res, next) => {
//   res.status(200).json({message: "So far so good!"})
  passport.authenticate('login', async(err, user, info) => {
    try {
      let error
      if (err) {
        error = new Error(err.message)
        error.status = 500

        return next(error)
      }

      if (!user) {
        error = new Error(info.message)
        error.status = 400
        return next(error)
      }

      req.login(user, { session: false }, async (error) => {
        if (error) return next(error)

        if (!user) {
          let err = new Error(info.message)
          err.status = 400
          return next(err)
        }

        const { username, id } = user
        const payload = { username, id }

        const token = jwtSign(payload)
        return res.json({ user, token })
      })
    } catch (error) {
      return next(error)
    }
  })(req, res, next)
})

module.exports = authRouter