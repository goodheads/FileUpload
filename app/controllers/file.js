var cloudinary = require('cloudinary');

module.exports = {

  uploadImage: function(req, res) {
    console.log(req.files);
    if (req.files.file) {
      cloudinary.uploader.upload(req.files.file.path, function(result) {
        if (result.url) {
          req.imageLink = result.url
          console.log(result.url);
        } else {
          res.json(error);
        }
      });
    } 
  }
};

