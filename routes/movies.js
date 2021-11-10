var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require ('path');


var moviesController=require('../controllers/moviesController');

/* MULTER */ 

var storage = multer.diskStorage({
    destination:  (req, file,cb) => {
      cb(null, 'public/images/movies')  
  
  },
  filename: function (req, file, cb) {
  cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
  })
  
  var upload = multer({ storage:storage});




//Character list

router.get('/', moviesController.list);



//CRUD characters

router.get('/create', moviesController.create);

router.post('/create',upload.any('imageMovie'), moviesController.store);

router.get('/edit/:id', moviesController.edit);

router.put('/edit/:id', moviesController.update);

router.delete('/destroy/:id', moviesController.destroy); 


//Character detail

router.get('/detail/:id', moviesController.detail);



module.exports = router;