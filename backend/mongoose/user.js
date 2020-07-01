import mongoose from 'mongoose';
let HistorySchema = new mongoose.Schema({
    titulo:{type:String},
    imagen:{type:String},
    trailer:{type:String} 
})

let UserSchema= new mongoose.Schema({
    mail: {type:String},
    username: {type:String},     
    password: {type:String},
    isAdmin: {type:Boolean},
    history: {type:[HistorySchema]},
    });

export var User = mongoose.model('User',UserSchema);         
