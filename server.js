const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const authRouter = require('./routers/authRouter')
// const appRouter = require('./routers/appRouter')
const passport = require('passport')
const { authorized } = require('./auth/auth')

// establishing the I/O port
const PORT = process.env.PORT || 4567

// initializing the express app
const app = express()

app.use(logger('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())
app.use('/auth', authRouter)
// app.use('/app', appRouter)
app.use('/app', authorized, appRouter)
app.use(passport.initialize())


app.use('/user', userRouter)


app.get('/', async (request, response) => {
    try {
      response.json({
        msg: 'Welcome to Photo Assembly'
      })
    } catch (e) {
      response.status(500).json({ msg: e.status })
    }
  });



app.listen(PORT, () => console.log(`Photo Assembly backend listening on port: ${PORT}!`))
