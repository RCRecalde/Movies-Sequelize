const db = require('../database/models')
const {Op} = require('sequelize');

const controller = {
    list : (req,res) =>{
        db.Actor.findAll()
    .then(actors => res.render('actorsList',{actors}))
    .catch(error => console.log(error))
    },
    ranking : (req,res) =>{
        db.Actor.findAll({
            where:{
                rating:{[Op.gte]: 7}
            },
            limit:10,
            order:[
                ['rating','DESC']
            ]
        })
    .then(actors => res.render('topActors',{actors}))
    .catch(error => console.log(error))
    },
    detail  : (req,res) =>{
        db.Actor.findByPk(req.params.id)
    .then(actor => res.render('actorsDetail',{actor}))
    .catch(error => console.log(error))
    }
}
module.exports=controller