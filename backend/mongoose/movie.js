import mongoose from 'mongoose';

let MovieSchema = new mongoose.Schema({
                   titulo:{type:String},
                   imagen:{type:String},
                   trailer:{type:String},
                  });

export var Movie=mongoose.model('Movie',MovieSchema);                    