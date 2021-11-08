const db = require('../database/models');

let charactersController = {

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
            imageCharacter:req.files.length > 0 ? req.files[0].filename : null.imageCharacter,
            name: req.body.name,
            age:req.body.age,
            weight:req.body.weight,
            history:req.body.history
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



    list: function (req, res) {
        db.Character.findAll({
            attributes:['imageCharacter','name'] 
        
      })
        .then(function (result) {
            res.send(result)
        }).catch(function (error) {
            console.log(error)
            res.send("Error")
        })
    },

    edit:function(req,res){
        db.Character.findByPK(req.params.id)
    }
};

module.exports = charactersController;