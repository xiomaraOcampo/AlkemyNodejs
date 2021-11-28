const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require ('path');

const genresController=require('../controllers/genresController');




/* MULTER */ 

 var storage = multer.diskStorage({
  destination:  (req, file,cb) => {
    cb(null, 'public/images/genres')  

},
filename: function (req, file, cb) {
cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
}
})

var upload = multer({ storage:storage});

 

//Character list
 router.get('/', genresController.list);


 router.get('/create', genresController.create);

  router.post('/create',upload.any('imageGenre'), genresController.store); 



  module.exports = router;