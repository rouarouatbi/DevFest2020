const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const event = new Schema({
    NameEvent : {type : String , 
    required : true,
},
    DescrptionEvent : {
        type : String ,
    },
    DateEvent :{
        type : Date ,
        
    },
    lieu : {
        type : String , 
       
    },
    benificiaire : {
        type : String 
    },
    Photo : {
        type : String ,
    },
})
var Events = mongoose.model('Event',eventSchema);
module.exports = Events;
