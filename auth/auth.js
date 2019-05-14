const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const { User } = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const JWTStrategy = require('passport-jwt').Strategy
const ExtractJWT = require('passport-jwt').ExtractJwt

const SECRET = "mojo jojo token super secret!" //do not do this in real application, use ENV variable instead

const jwtSign = (payload) => {
    return jwt.sign(payload, SECRET)
}

passport.use(new JWTStrategy({
    secretOrKey: SECRET,
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
  }, async(token, done) => {
    console.log(`YOYOYO`)
    try {
        console.log(" *** decoded token ***", token)
      const user = await User.findByPk(token.id);
      console.log(`user from jwt Token: ${user}`)

      if (user) {
        done(null, user)
      } else {
        done(null, false)
      }
    } catch(error) {
      done(error)
    }
  }))

passport.use('signup', new LocalStrategy({
    nameField: 'name',
    usernameField: 'email',
    passwordField: 'password'
}, async (  email, password, done) => {
    try {
        console.log("in signup try!")
        const user = await User.create({ email, password })
        if (!user) {
            return done(null, false, { message: 'Unable to sign up user'})
        }

        done(null, user)
    } catch (e) {
        console.log(e)
        done(e)
    }
}))

passport.use('login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  }, async (email, password, done) => {
    try {
      // find user by their email
      const user = await User.findOne({ where: { email: email }})
      console.log(user.email)

      console.log(`*** user: ${user} ***`)

      if (!user) {
        return done(null, false, { message: 'User not found'})
      }

      // compare passwords
      const validate = await bcrypt.compare(password, user.password);
      console.log(`*** validate: ${validate} ***`)

      if (!validate) {
        return done(null, false, { message: 'Wrong password'})
      }

      // login was a success, return the user object
      return done(null, user, { message: 'Logged in successfully'})

    } catch(error) {
      return done(error)
    }
  }))

  /**
 * middleware for checking authorization with jwt
 */
const authorized = (request, response, next) => {
    passport.authenticate('jwt', { session: false, }, async (error, token) => {
      if (error || !token) {
        // response.status(401).json({ message: 'Unauthorized' });
        let err = new Error('Hello, pew pew pew');
        err.status = 401;
        next(err)
      }
      try {
        const user = await User.findOne({ where: { id: token.id }});
        request.user = user;
      } catch (error) {
        next(error);
      }
      next();
    })(request, response, next);
  }

  module.exports = {
      passport,
      jwtSign,
      authorized
    }
