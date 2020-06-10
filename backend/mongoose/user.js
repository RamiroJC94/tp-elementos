import mongoose from 'mongoose';


let UserSchema= new mongoose.Schema({
    username: {type:String},     
    password: {type:String},
   
         });

export var User = mongoose.model('User',UserSchema);         
