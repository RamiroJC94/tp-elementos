import MongooseConnection from './services/connection.js';
import ServiceMovie from './services/service_movie.js'
import { before, after } from 'mocha';
var monguito = new MongooseConnection();
var service = new ServiceMovie();

//para ejecutar el setup es yarn run setUp
before(()=>{
    monguito.openConnection();    
})
after(()=>{
   monguito.closeConnection();
})

describe("setUp",()=>{
    it("load movies",async ()=>{
        await service.createMovie("avengers","imagen url","trailer url");
        await service.createMovie("avengers2","imagen url","trailer url");
        await service.createMovie("avengers3","imagen url","trailer url");
        await service.createMovie("avengers4","imagen url","trailer url");
        await service.createMovie("avengers5","imagen url","trailer url");
        await service.createMovie("avengers6","imagen url","trailer url");
        await service.createMovie("avengers7","imagen url","trailer url");
        await service.createMovie("avengers8","imagen url","trailer url");
        await service.createMovie("avengers9","imagen url","trailer url");
        await service.createMovie("avengers10","imagen url","trailer url");
        await service.createMovie("avengers11","imagen url","trailer url");
        await service.createMovie("avengers12","imagen url","trailer url");
        await service.createMovie("avengers13","imagen url","trailer url");
        await service.createMovie("avengers14","imagen url","trailer url");
        await service.createMovie("avengers15","imagen url","trailer url");
    })
    })

