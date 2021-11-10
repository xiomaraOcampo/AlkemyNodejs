const db = require('../database/models');

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
        db.Movie.create({
            imageMovie:req.files.length > 0 ? req.files[0].filename : null.imageMovie,
            title: req.body.title,
            genre_id:req.body.genre_id,
            release_date:req.body.release_date,
            score:req.body.score
        })
        .then(function (newMovie) {
            res.send(newMovie)
        }).catch(function (error) {
            console.log(error)
            res.send("Error")
        })
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
    }, 

    destroy:function(req,res){
        db.Movie.destroy ({
            where:{
                id:req.params.id
            }
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
    }
};

module.exports = moviesController;