import {Movie} from '../mongoose/movie'

export default class ServiceMovie{
       constructor(){

       }

       async createMovie(titulo,imagen,trailer){
              const movie=new Movie({
                    titulo:titulo,
                    imagen:imagen,
                    trailer:trailer,
              })

              await movie.save();
              return "success";
       }

       async getMovies(){
          let result=await Movie.find();
          let pelis=result.map(movie => {
            return{titulo:movie.titulo,imagen:movie.imagen,trailer:movie.trailer}
          })
          return pelis; 
       }
        

} 