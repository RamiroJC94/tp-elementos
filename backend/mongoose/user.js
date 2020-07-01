import mongoose from 'mongoose';


let UserSchema= new mongoose.Schema({
    mail: {type:String},
    username: {type:String},     
    password: {type:String},
    isAdmin: {type:Boolean},
    History: {type:String},
    });

export var User = mongoose.model('User',UserSchema);         
