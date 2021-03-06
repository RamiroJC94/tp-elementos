import express from 'express';
import MongooseConnection from './services/connection.js';
import ServiceUser from './services/service_user.js';
import ServiceMovie from './services/service_movie.js';
import cors from 'cors';


var monguito=new MongooseConnection();
var service = new ServiceUser();
let serviceMovie = new ServiceMovie();

var app = express();
let router = express.Router();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/',router);

app.get('/user', async (req,res)=>{
    console.log(req.body.username);
    monguito.openConnection();
    const userfinded= await service.findUserByUsername(req.body.username);
    monguito.closeConnection();
    res.json(JSON.stringify(userfinded));
}       
);

app.put('/updatePasswordUser', async (req,res) =>{
    monguito.openConnection();
    await service.ChangePasswordUser(req.body.username,req.body.password);
    monguito.closeConnection();
    res.send("Password Actualizado")
})

app.post('/addFav', async (req,res)=>{
    monguito.openConnection();
    let movie = await serviceMovie.getMovie(req.body.title);
    await service.addToFav(req.body.username,movie);
    res.status(204)
    res.send("Add to fav");
})

app.post('/users/login',async (req,res)=>{
    console.log(req.body);
    monguito.openConnection();
    try{
        let user = await service.login(req.body.username,req.body.password);
        console.log(user)
        res.send(user);
        monguito.closeConnection();
    } catch(error){
        console.log(error);
        monguito.closeConnection();   
        res.status(404).send("404 Not Found"); 
    } 

});

app.post('/user',async  (req, res) => {
    console.log(req.body);


    monguito.openConnection();
    await service.createUser(req.body.mail,req.body.username,req.body.password,req.body.idAdmin);
    const user=await service.findUserByUsername(req.body.username);
    monguito.closeConnection();
    console.log(user)
    res.send(user);
});

app.post(`/addMovies`, async (req, res) => {
    console.log(req.body);

    monguito.openConnection();
    await serviceMovie.createMovie(req.body.titulo,req.body.imagen,req.body.trailer);
    monguito.closeConnection();

    res.send("movie guardado");
});

app.post('/movie/comment',async (req,res)=>{
    monguito.openConnection();   
    await serviceMovie.createComment(req.body.titulo,req.body.username,req.body.texto)
    monguito.closeConnection();
    res.send("se agrego el comentario con exito")
}
)
app.get('/movie/comments',async (req,res)=>{
    monguito.openConnection();
    if(req.query.titulo){
    const comments= await serviceMovie.commentsOfMovie(req.query.titulo);
           res.send(comments.comentarios)
    }
    else{
        res.status(404).send("no se envio el titulo de la pelicula")
    }
    monguito.closeConnection();
})
app.get('/search',async (req,res)=>{
    monguito.openConnection()
    if(req.query.titulo){
        const pelis=await serviceMovie.search(req.query.titulo);
        res.send(pelis);
    }
    else{
    const allpelis=await serviceMovie.getMovies();
    res.send(allpelis);}
    monguito.closeConnection();

});

app.put(`/updateMovies`, async (req,res) => {
    monguito.openConnection();
    await serviceMovie.updateMovie(req.body.titulo,req.body.imagen,req.body.trailer);
    monguito.closeConnection();
    res.send("Pelicula Actualizada")
});

app.put(`/updateData` , async(req,res) => {
    console.log(req.body)
    monguito.openConnection();
    await  service.updateData(req.body.username,req.body.mail,req.body.password,req.body.userLogeado);
    monguito.closeConnection();
    res.send("User Actualizado");
});

app.delete('/deleteMovie', async(req,res) =>{
    monguito.openConnection();
    await  serviceMovie.deleteMovie(req.body.titulo);
    monguito.closeConnection();
    res.send("Movie eliminada");
})

router.route('/movies')
    .get(async function(req,res){
        monguito.openConnection();
        let pelis = await serviceMovie.getMovies();
        if(req.query.titulo){
          let peli = pelis.find(movie => movie.titulo === req.query.titulo)
          if(peli != undefined){
              res.send(peli)
          }else{ res.send("404 Not Found")}
        }else{
            res.send(pelis);
        }

    })
    .post(function(req,res){
        res.json('post.')
    })
    

app.listen(7000,  ()=> {
    console.log('Example app listening on port 7000!');
  });