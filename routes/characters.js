const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require ('path');

const charactersController=require('../controllers/charactersController');



/* MULTER */ 

var storage = multer.diskStorage({
  destination:  (req, file,cb) => {
    cb(null, 'public/images')  

},
filename: function (req, file, cb) {
cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
}
})

var upload = multer({ storage:storage});


  router.get('/', charactersController.list);

  router.get('/create', charactersController.create);

  router.post('/create',upload.any('imageCharacter'), charactersController.store);

  //router.post('/create', charactersController.store);

 


module.exports = router;