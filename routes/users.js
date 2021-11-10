var express = require('express');
var router = express.Router();

var usersController=require('../controllers/usersController');

const validations=require('../Middleware/validations');

/* GET users listing. */
router.get('/', usersController.index);


router.get('/auth/register',usersController.createRegister );

router.post('/auth/register',validations.validRegister,usersController.storeRegister );







module.exports = router;