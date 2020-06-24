import mongoose from 'mongoose';
mongoose.set('useFindAndModify', false);
let CommentSchema = new mongoose.Schema({
                username:{type:String},
                date:{type:Date,default:Date.now}, 
                texto:{type:String}, 
})
let MovieSchema = new mongoose.Schema({
                   titulo:{type:String},
                   imagen:{type:String},
                   trailer:{type:String},
                   comentarios:{type:[CommentSchema]},
                  });

export let Movie=mongoose.model('Movie',MovieSchema);   
export let Comment=mongoose.model('Comment',CommentSchema);                 