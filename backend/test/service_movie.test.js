import {expect} from 'chai';
import MongooseConnection from '../services/connection.js';
import ServiceMovie from '../services/service_movie.js'
import mongoose from 'mongoose';
var monguito = new MongooseConnection();
var service = new ServiceMovie();

beforeEach(()=>{
    monguito.openConnection();
});

afterEach(async ()=>{
        const collections = await mongoose.connection.db.collections();
      
        for (let collection of collections) {
          await collection.remove();
        }
      
    monguito.closeConnection();
})

describe("test service movie", () =>{
    it("creo una peli y la guardo",async ()=>{
        const meassage= await service.createMovie("avengers","imagen url","trailer url");   
        expect("success").to.equal(meassage);
    })  

    it("traigo todas las peliculas",async ()=>{
        await service.createMovie("avengers","imagen url","trailer url");
        await service.createMovie("avengers2","imagen url","trailer url");
        await service.createMovie("avengers3","imagen url","trailer url");

        const pelis = await service.getMovies();
        expect(3).to.equal(pelis.length);
     //   console.log(pelis);
    })
})