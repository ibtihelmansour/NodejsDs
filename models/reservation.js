const mongoose = require('mongoose') ; 
const Joi = require('joi')  ;
Joi.ObjectId = require('joi-objectid')(Joi) ; 

const reservationSchema = mongoose.Schema ({
    date : { type : Date , default : Date.now()} 
})