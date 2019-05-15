const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const authRouter = require('./routes/authRouter')
const appRouter = require('./routes/appRouter')
const passport = require('passport')
const { authorized } = require('./auth/auth')
const { userRouter } = require('./routes/userRouter')
const { postRouter } = require('./routes/postRouter')
const uploadRouter = require('./aws/fileUploadRoute')


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
app.use(passport.initialize())
app.use('/auth', authRouter)
// app.use('/app', appRouter)
app.use('/app', authorized, appRouter)
app.use('/user', userRouter)
app.use('/post', postRouter)
app.use('/image-upload', uploadRouter)


app.get('/', async (request, response) => {
    try {
      response.json({
        msg: 'Welcome to Photo Assembly'
      })
    } catch (e) {
      response.status(500).json({ msg: e.status })
    }
  });

app.use((err, req, res, next) => {
  // render the error
  console.log('error in error handler', err)
  res.status(err.status || 500);
  res.json({ message: err.message });
});



  

app.listen(PORT, () => console.log(`Photo Assembly backend listening on port: ${PORT}!`))
