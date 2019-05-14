const express = require("express");
const uploadRouter = express.Router();
const upload = require('./multer');

const singleUpload = upload.single('image')

uploadRouter.post('/', function(request, response) {
  singleUpload(request, response, function(err, some) {
    if (err) {
      response.status(422).send({errors: [{title: 'Image Upload Error', detail: err.message}] });
    }
    // console.log(request)
    response.json({'imageUrl': request.file.location});
  });
})

module.exports = uploadRouter;