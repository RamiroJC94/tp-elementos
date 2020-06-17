import MongooseConnection from './services/connection.js';
import ServiceMovie from './services/service_movie.js'
import ServiceUser from './services/service_user.js'

import { before, after } from 'mocha';
var monguito = new MongooseConnection();
var service = new ServiceMovie();
var serviceUser = new ServiceUser();


//para ejecutar el setup es yarn run setUp
before(()=>{
    monguito.openConnection();    
})
after(()=>{
   monguito.closeConnection();
})

describe("setUp",()=>{
    it("load movies y un user",async ()=>{
await service.createMovie("The Avengers","https://66.media.tumblr.com/7e27e91435d57790d9d70944c64baad2/tumblr_inline_nnmj1e7oXR1qa2gkq_500.jpg","https://www.youtube.com/watch?v=eOrNdBpGMv8");
              
await service.createMovie("Avengers: Age of Ultron","https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/5/54/Avengers_Age_Of_Ultron_Poster.png/revision/latest/scale-to-width-down/1000?cb=20191029195118&path-prefix=es","https://www.youtube.com/watch?v=tmeOjFno6Do");
         
await service.createMovie("Avengers: Infinity War","https://images-na.ssl-images-amazon.com/images/I/81En6m%2BG2%2BL._AC_SY550_.jpg","https://www.youtube.com/watch?v=6ZfuNTqbHE8");
     
await service.createMovie("Avengers: Endgame","https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/9/9b/Avenger_Endgame_Poster_Oficial.png/revision/latest/scale-to-width-down/1000?cb=20190326185910&path-prefix=es","https://www.youtube.com/watch?v=TcMBFSGVi1c");
        
await service.createMovie("Mi vecino Totoro","https://i.pinimg.com/originals/39/a7/c3/39a7c36682abcc1f93e339611ae0f0ab.jpg","https://www.youtube.com/watch?v=BjeBG8Xrci8");
        
await service.createMovie("Nicky, la aprendiz de bruja","http://www.c1n3.org/m/miyazaki01h/images/1989%20Majo%20no%20takkyubin%20-%20Nicky%20la%20aprendiz%20de%20bruja%20(ing)%20(dvd)%2001.jpg","https://www.youtube.com/watch?v=4bG17OYs-GA");
        
await service.createMovie("Recuerdos del ayer","https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/cover_290x414/public/media/image/2020/02/recuerdos-ayer-1857321.jpg?itok=tuT8I31C","https://www.youtube.com/watch?v=x0ZrjocXVJ4");
        
await service.createMovie("Porco Rosso","https://resizing.flixster.com/JsT-O0qUPyMwgp8lZCfKDpi_zpA=/206x305/v1.bTsxMjE4NDcwMztqOzE4NDU2OzEyMDA7Mjg0OzQwNQ","https://www.youtube.com/watch?v=awEC-aLDzjs");
        
await service.createMovie("Puedo escuchar el mar","https://i.pinimg.com/564x/a0/91/d3/a091d3426ec519fb7eb51a943e5dc11c.jpg","https://www.youtube.com/watch?v=VciuDweg61c");
        
await service.createMovie("Susurros del corazon","https://es.web.img3.acsta.net/r_1280_720/pictures/15/09/23/13/01/438692.jpg","https://www.youtube.com/watch?v=ywFbbZXMsGs");
        
await service.createMovie("La princesa Mononoke","https://pm1.narvii.com/6887/89186e5bbecbe350acfe21ec56c1695ce7e690d1r1-1000-1500v2_hq.jpg","https://www.youtube.com/watch?v=4OiMOHRDs14");
        
await service.createMovie("El viaje de Chihiro","https://vignette.wikia.nocookie.net/disney/images/c/c5/Spirited_Away.jpg/revision/latest/scale-to-width-down/344?cb=20130421015528&path-prefix=es","https://www.youtube.com/watch?v=YgO6g_gHtaE");
        
await service.createMovie("Haru en el reino de los gatos","https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/cover_290x414/public/media/image/2020/03/haru-reino-gatos-cartel-1880995.jpg?itok=6QpAWb87","https://www.youtube.com/watch?v=YgACXczvMPw");
        
await service.createMovie("El castillo ambulante","http://es.web.img3.acsta.net/c_215_290/medias/nmedia/18/80/29/24/20062836.jpg","https://www.youtube.com/watch?v=QLNAmXIyEjc");
        
await service.createMovie("La colina de las amapolas","https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/cover_290x414/public/media/image/2020/04/colina-amapolas-1910129.jpg?itok=MOcBZhrh","https://www.youtube.com/watch?v=9-rhgSCAqDU");

await serviceUser.createUser("a@gmail.com","1234");
})
    })

