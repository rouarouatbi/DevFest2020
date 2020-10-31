var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    name:{
        type:String,
        default: ''
    },
    city:{
        type:String,
        default:''
    },
    mail:{
        type:String,
        default:''
    },
});
UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User',UserSchema);