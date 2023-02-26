const db = require('../database/models')
const {Op} = require('sequelize');

const controller = {
    list : (req,res) =>{
    db.Movie.findAll()
    .then(movies => res.render('moviesList',{movies}))
    .catch(error => console.log(error))
    },
    new : (req,res) =>{
    db.Movie.findAll({
        order:[
            ['release_date','DESC']
        ]
    }
    )
    .then(movies => res.render('newestMovies',{movies}))
    .catch(error => console.log(error))
    },
    recomended : (req,res) =>{
        db.Movie.findAll({
            where:{
                rating:{[Op.gte]: 9}
            },
            limit:5,
            order:[
                ['rating','DESC']
            ]
        })
    .then(movies => res.render('recommendedMovies',{movies}))
    .catch(error => console.log(error))
    },
    detail : (req,res) =>{
    db.Movie.findByPk(req.params.id)
    .then(movie => res.render('moviesDetail',{movie}))
    .catch(error => console.log(error))
    },
    
}

module.exports= controller