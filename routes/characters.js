const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require ('path');

const charactersController=require('../controllers/charactersController');



/* MULTER */ 

var storage = multer.diskStorage({
  destination:  (req, file,cb) => {
    cb(null, 'public/images/characters')  

},
filename: function (req, file, cb) {
cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
}
})

var upload = multer({ storage:storage});



//Character list
  router.get('/', charactersController.list);





//CRUD characters

  router.get('/create', charactersController.create);

  router.post('/create',upload.any('imageCharacter'), charactersController.store);

  router.get('/edit/:id', charactersController.edit);

  router.put('/edit/:id', charactersController.update);

  router.delete('/destroy/:id', charactersController.destroy); 


//Character detail

router.get('/detail/:id', charactersController.detail);


 


module.exports = router;