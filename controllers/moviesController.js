const db = require('../database/models');

let moviesController = {
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
            image:req.body.image,
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
    list: function (req, res) {
        db.Movie.findAll({
            include: [
                { model: db.Character, as: 'characters' }
            ]
        })
        .then(function (result) {
            res.send(result)
        }).catch(function (error) {
            console.log(error)
            res.send("Error")
        })
    }
};

module.exports = moviesController;