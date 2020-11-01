const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const needSchema = new Schema ({
    needstype :{
        type : String,
    },
    quantity : {
        type : Number ,
    },
    phone1 :{
        type : String , 
    },
    phone2 :{
        type : String ,
    },
    Adress : {
        type : String ,
    },
    state : {
        type : String ,
    },

    city :{
        type : String 
    },
    postal :{
        type :String 
    },
    description :{
        type :String 
    },
},{
    timestamps : true
});
var Needs = mongoose.model('Need',needSchema);
module.exports = Needs;