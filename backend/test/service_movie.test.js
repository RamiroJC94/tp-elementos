import {expect} from 'chai';
import ServiceMovie from '../services/service_movie.js'

var service = new ServiceMovie();

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

    it("busco avengers",async ()=>{
        await service.createMovie("the avengers","imagen url","trailer url");
        await service.createMovie("the avengers2","imagen url","trailer url");
        await service.createMovie("the avengers3","imagen url","trailer url");
       let pelis= await service.search('the');
       expect(3).to.equal(pelis.length); 
    })

    it("agrego 2 comentarios",async ()=>{
        await service.createMovie("the avengers","imagen url","trailer url");
        await service.createComment("the avengers","ash10","safa la peli pero no llega al 10")    
        let peliComentada=await service.commentsOfMovie("the avengers")
        expect(1).to.equal(peliComentada.comentarios.length)
        await service.createComment("the avengers","mig10","le doy un 7")    
         peliComentada=await service.commentsOfMovie("the avengers")
         expect(2).to.equal(peliComentada.comentarios.length)
         
    })
})