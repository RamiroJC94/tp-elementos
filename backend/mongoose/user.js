import mongoose from 'mongoose';
import {MovieSchema, Movie} from '../mongoose/movie'

let UserSchema= new mongoose.Schema({
    mail: {type:String},
    username: {type:String},     
    password: {type:String},
    isAdmin: {type:Boolean},
    favorites: {type:[MovieSchema]}
         });

export var User = mongoose.model('User',UserSchema);         
