import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var userSchema=new Schema({
         name: String,
         mail: String,
         username: String});

export var User = mongoose.model('User',userSchema);         
