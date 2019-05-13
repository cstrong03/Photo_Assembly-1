const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan');
const app = express();
const PORT = process.env.PORT || 4567

app.use(logger('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())





app.listen(PORT, () => console.log(`Photo Assembly backend listening on port: ${PORT}!`))
