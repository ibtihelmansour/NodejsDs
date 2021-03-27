const mongoose = require('mongoose') ; 
const Joi = require('joi')  ;
const number = require('joi/lib/types/number');
Joi.ObjectId = require('joi-objectid')(Joi) ; 
const seanceSchema = mongoose.Schema ({ 
    date : { type : Date }  , 
    time : { type : String }  , 
    nbplaces : { type : Number , required : true  }  ,  
}) ;

module.exports = mongoose.model('Seance' , seanceSchema) ; 