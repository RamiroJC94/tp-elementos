import {Movie,Comment} from '../mongoose/movie'

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
            return{titulo:movie.titulo,imagen:movie.imagen,trailer:movie.trailer,
            comentarios:movie.comentarios}
          })
          return pelis; 
       }

       async search(text){
          const reg= new RegExp(text,"i") // equivalente a /text/i
         try {
              let movies= await Movie.find({titulo: {$regex:reg}})
              
             return movies; 
                    
         } catch (error) {
              return []           
         }
        }
        
        async createComment(title,username,text){
           try {
             const comment= new Comment({
                username:username,
                texto:text,
               })
               //(filter,update)
              await Movie.findOneAndUpdate({titulo:title},
               {$push:{comentarios:comment}}) 
              return "se incerto con exito"     
           } catch (error) {
              console.log(error);
           }
        }

        async commentsOfMovie(title){
           const comments=await Movie.findOne({titulo:title});
           return comments;
        }

} 