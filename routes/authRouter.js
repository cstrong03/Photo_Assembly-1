const express = require('express')
const authRouter = express.Router()
const { passport, jwtSign } = require('../auth/auth.js')
const bcrypt = require('bcrypt')
const { User, Post } = require('../models.js')



authRouter.post('/signup', async(req, res, next) => {
  passport.authenticate('signup', async(err, user, info) => {
    try {
      if (err) {
        let error = new Error(err.message || info.message)
        error.status = 400
        return next(error)
      }

      if (!user) {
        return res.status(401).json({message: info.message})
      }
    
        console.log(user)
      const { email, username, password } = user
      const payload = { email, username, password }
      console.log("from signup:", payload)

      const token = jwtSign(payload)
      return res.json({user: user, token: token, message: info.message})
    } catch (error) {
      return next(error)
    }
  })(req, res, next)
})

authRouter.post('/login', (req, res, next) => {
  passport.authenticate('login', async(err, user, info) => {
    try {
        const {username, password} = req.body;
        console.log(req.body)

        const user = await User.findOne({where: {username}, include: [Post]});
        console.log(password, user.password);
        const valid =  await bcrypt.compare(password, user.password);
        if (valid) {
        const { username, posts, id } = user
        const payload = { username, posts, id };

        const token = jwtSign(payload)
        console.log('TOKEN: ', token)
        return res.json({ user, token, id })
        }
      let error;
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

      })
    } catch (error) {
      return next(error)
    }
  })(req, res, next)
})




module.exports = authRouter