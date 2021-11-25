const db = require('../database/models');
const bcrypt=require('bcrypt');
const { check, validationResult, body } = require('express-validator');
const { generarJWT } = require('../Middleware/generarJWT');

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

  storeRegister: function (req, res) {
    let registerUser = {
      id: req.body.id,
      name: req.body.name,
      mail: req.body.mail,
      password: bcrypt.hashSync(req.body.password,10)
    };
    let errors = validationResult(req);
    if (errors.isEmpty()) {

      db.User.create({
        "name": registerUser.name,
        "mail": registerUser.mail,
        "password": registerUser.password
      })
      res.json({
        msg:'register ok'
      })
    } else {
      res.status(400).json({ errors: errors.errors })
    }
  },


  storeLogin:function (req, res) {

    const { id,mail, password,name} = req.body;
   

    
      //Verify if the mail exists

       db.User.findOne({
        where:{
          mail:mail
        }
      }).then((resultado)=>{
        //console.log(resultado);
        const existe = resultado != undefined;
        if (!existe) {
          return res.status(400).json({
            msg:'Mail does not exist'
          }) 
        }
  
      // Verify the password
       const validPassword=bcrypt.compareSync(password,resultado.getDataValue('password'));
      // console.log(validPassword);
          if (!validPassword) {
            return res.status(400).json({
              msg:'Password does not exist'
            }) 
          } 
          console.log(id)
      //Create JWT
    //const token= await generarJWT(id);
   

        res.json({
          msg:'Login ok'
          
        })
      }).catch(function(error){
        console.log(error)
        res.status(500).json({
          msg:'hable con el administrador' 
        })
      })

  }
};



module.exports = usersController;