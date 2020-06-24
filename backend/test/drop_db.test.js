import MongooseConnection from '../services/connection.js';
import mongoose from 'mongoose'
var monguito = new MongooseConnection();
beforeEach( ()=>{
    monguito.openConnection();
   
});
afterEach(async ()=>{
         
    await  mongoose.connection.db.dropDatabase();
    monguito.closeConnection();
 })
 