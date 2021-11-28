const db = require('../database/models');

let genresController = {

    list: function (req, res) {
        db.Genre.findAll({
            
        })
        .then(function (result) {
            res.send(result)
        }).catch(function (error) {
            console.log(error)
            res.send("Error")
        })
    },

    create: function (req, res) {
        db.Genre.findAll({
           
        })
            .then(function (result) {
                res.send(result)
                console.log(result);
            }).catch(function (error) {
                console.log(error)
                res.send("Error")
            })
    },

     store: function (req, res) {


        db.Genre.create({
            name: req.body.name,
            imageGenre: req.files.length > 0 ? req.files[0].filename : null.imageGenre,
            movie_id:req.body.movie_id,
           
        })
            .then(function (newCharacter) {

                res.send(newCharacter)
            }).catch(function (error) {
                console.log(error)
                res.send("Error")
            })
    }, 


}

module.exports = genresController;