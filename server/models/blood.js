const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const bloodSchema = new Schema ({
    type :{
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
var Bloods = mongoose.model('Blood',bloodSchema);
module.exports = Bloods;