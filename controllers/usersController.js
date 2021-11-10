const db = require('../database/models');
let { check, validationResult, body } = require('express-validator');

let usersController = {
    index: function (req, res) {
      db.User.findAll()
        .then(function (result) {
          res.send(result)
        }).catch(function (error) {
          console.log(error)
          res.send("Error")
        })
    },

    createRegister: function (req, res) {
      db.User.findAll()
        .then(function (result) {
          res.send(result)
        }).catch(function (error) {
          console.log(error)
          res.send("Error")
        })
    },

    storeRegister:function(req,res){

      
      let registerUser={
        id: req.body.id,
        name: req.body.name,
        mail: req.body.mail,
        password:req.body.password
      };
      let errors = validationResult(req);
      if (errors.isEmpty()) {
      
          db.User.create({
            "name": registerUser.name,
            "mail": registerUser.mail,
            "password": registerUser.password
        })
      }else{
        { errors: errors.errors }// fijarme como puedo hacer para que me muestre los errores abajo en Postman tbn agregar el tipo en el modelo y base de datos de usuarios
        
      }
  }
};

module.exports = usersController;