import mongoose from 'mongoose';
import {MovieSchema, Movie} from '../mongoose/movie'
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
    favorites: {type:[MovieSchema]},
    history: {type:[HistorySchema]}
    });

export var User = mongoose.model('User',UserSchema);
export let History=mongoose.model('History',HistorySchema);