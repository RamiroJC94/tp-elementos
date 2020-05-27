import mongoose from 'mongoose';

const URI='mongodb://localhost/peliculas';

export default class MongooseConnection{
     
   constructor(){
   }

   openConnection(){
    mongoose.connect(URI, {useNewUrlParser: true,useUnifiedTopology: true})
    .then(()=>console.log("connection successfully"))
    .catch(error => console.log(error));
   }

   closeConnection(){
       mongoose.connection.close();
   }

}


