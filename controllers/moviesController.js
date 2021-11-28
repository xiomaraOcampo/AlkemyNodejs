const db = require('../database/models');
const { QueryTypes } = require('sequelize');
const { check, validationResult, body } = require('express-validator');

let moviesController = {


    list: function (req, res) {
      
        
            db.Movie.findAll({
            
                attributes:['imageMovie','title','release_date']
            })
            .then(function (result) {
                res.send(result)
            }).catch(function (error) {
                console.log(error)
                res.send("Error")
            })
    

       
    },

    create: function (req, res) {
        db.Movie.findAll()
            .then(function (result) {
            res.send(result)
            
        }).catch(function (error) {
            console.log(error)
            res.send("Error")
        })
    },

    store: function (req, res) {

        let errors = validationResult(req);
        if (errors.isEmpty()) {
        
            db.Movie.create({
                imageMovie:req.files.length > 0 ? req.files[0].filename : null.image,
                title: req.body.title,
                genre_id:req.body.genre_id,
                release_date:req.body.release_date,
                score:req.body.score
            })
            res.json({
                msg:'movie created'
              })
        }else{
            res.status(400).json({ errors: errors.errors })
        }
    },
   
    edit:function(req,res){
        db.Movie.findByPk (req.params.id)
        .then(function(movie){
            res.send(movie)
        }).catch(function (error) {
            console.log(error)
            res.send("Error")
        })
    },

     update:function(req,res){
        db.Movie.update({
            imageMovie:req.body.imageMovie,
            title: req.body.title,
            genre_id:req.body.genre_id,
            release_date:req.body.release_date,
            score:req.body.score
            
          },{
            where:{
                id:req.params.id
            }
        })
        res.json({
            msg:'movie edited'
          })

    }, 

    destroy:function(req,res){
        db.Movie.destroy ({
            where:{
                id:req.params.id
            }
        })
        res.json({
            msg:'movie eliminated'
          })

    },

    detail:function(req,res){
        db.Movie.findByPk (req.params.id,{
            include: [{ association: "characters" }],
        raw: true,
        nest: true,
      })
        .then(function(movieDetail){
            res.send(movieDetail)
            console.log(movieDetail)
        }).catch(function (error) {
            console.log(error)
            res.send("Error")
        })
    },

   /*  search: async(req,res)=>{

        const movies = await sequelize.query("SELECT * FROM `movies`", { type: QueryTypes.SELECT });
        console.log(movies);  
    } */

    
};

module.exports = moviesController;