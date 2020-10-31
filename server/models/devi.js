const mongoose = require('mongoose');
//const { text } = require('express');
const Schema = mongoose.Schema;

const deviSchema = new Schema({
    name: {
        type:String,
        required:true,
    },
    largeur: {
        type:Number,
        required:true,
    },
    hauteur:{
        type:Number,
        required:true,
    },
    tel:{
        type:Number,
        required:true,
        min:10000000,
        max:99999999
    },
    quantite:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    }
}
,{
    timestamps : true
});


var Devis = mongoose.model('Devi',deviSchema);

module.exports = Devis;