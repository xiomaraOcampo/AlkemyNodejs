const db = require('../database/models');

let charactersController = {

    list: function (req, res) {
        
        db.Character.findAll({
            include:{ 
                model: Movie,
                as: 'movies',
                where:{
                    id: req.query.movies       
                }
             },
            raw: true,
            nest: true,  
            attributes:['imageCharacter', 'name'],
            where: req.query
        })
            .then(function (result) {
                res.send(result)
            }).catch(function (error) {
                console.log(error)
                res.send("Error")
            })
        
    },

    create: function (req, res) {
        db.Character.findAll({
            include: [{ association: "movies" }],
            raw: true,
            nest: true,
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


        db.Character.create({
            imageCharacter: req.files.length > 0 ? req.files[0].filename : null.imageCharacter,
            name: req.body.name,
            age: req.body.age,
            weight: req.body.weight,
            history: req.body.history
        })
            .then(function (newCharacter) {
                db.Character_Movie.create({
                    movie_id: req.body.movie,
                    character_id: newCharacter.id
                });

                res.send(newCharacter)
            }).catch(function (error) {
                console.log(error)
                res.send("Error")
            })
    },





    edit: function (req, res) {
        db.Character.findByPk(req.params.id)
            .then(function (character) {
                res.send(character)
            }).catch(function (error) {
                console.log(error)
                res.send("Error")
            })
    },

    update: function (req, res) {
        db.Character.update({
            imageCharacter: req.body.image,
            name: req.body.name,
            age: req.body.age,
            weight: req.body.weight,
            history: req.body.history
        }, {
            where: {
                id: req.params.id
            }
        })
    },

    destroy: function (req, res) {
        db.Character.destroy({
            where: {
                id: req.params.id
            }
        })

    },

    detail: function (req, res) {
        db.Character.findByPk(req.params.id, {
            include: [{ association: "movies" }],
            raw: true,
            nest: true,
        })
            .then(function (characterDetail) {
                res.send(characterDetail)
                console.log(characterDetail)
            }).catch(function (error) {
                console.log(error)
                res.send("Error")
            })
    }




};

module.exports = charactersController;