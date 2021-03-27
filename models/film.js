const mongoose = require('mongoose') ; 
const Joi = require('joi')  ;
Joi.ObjectId = require('joi-objectid')(Joi) ; 
const Seance = require ('./seance') ; 

const filmSchema = mongoose.Schema ({ 
    name : {type : String , required : true} , 
    actors : [ String] , 
    seance: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Seance' }],
}) ; 
const validate_film_schema = {
    name : Joi.string().min(5).max(50).required()  ,  
    actors : Joi.array().min(3).items(Joi.string().min(6)).required(), 
    seance :Joi.array().items({_id : Joi.ObjectId() , date: Joi.date() , time : Joi.string() ,nbplaces : Joi.number()}).required(), 
}
function validation_film (body) { 
    return Joi.validate(body , validate_film_schema) ; 
}
const validate_film_schema_update = {
    name : Joi.string().min(5).max(50) ,  
    actors : Joi.array().min(3).items(Joi.string().min(5)),
    seance :Joi.array().items({_id : Joi.ObjectId() , date: Joi.date() , time : Joi.string() ,nbplaces : Joi.number()}), 
}

function validation_film_update (body) { 
    return Joi.validate(body , validate_film_schema_update) ; 
}
module.exports.Film = mongoose.model('Film' , filmSchema) ;
module.exports.validation_film = validation_film  ; 
module.exports.validation_film_update = validation_film_update ; 
