const multer = require("multer")

//Define File Storage

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, Date().toISOString().replace(/:/g, "-") + file.originalname ) 
    }
  })
  
//Specify file format that can be saved
function fileFilter (req, file, cb) {

    if(file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg" || file.mimetype === "image/webp"){
        cb(null, true)
    } else {
        cb(null, false)
    }
  
  }

const upload = multer({ storage, fileFilter })

module.exports = {upload}