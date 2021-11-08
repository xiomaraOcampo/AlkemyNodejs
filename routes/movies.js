var express = require('express');
var router = express.Router();
var moviesController=require('../controllers/moviesController');

router.get('/create', moviesController.create)

router.post('/create', moviesController.store)

router.get('/', moviesController.list)

module.exports = router;