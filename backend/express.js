import express from 'express';
import MongooseConnection from './services/connection.js';
import ServiceUser from './services/service_user.js'
import ServiceMovie from './services/service_movie.js'

var monguito=new MongooseConnection();
var service = new ServiceUser();
let serviceMovie = new ServiceMovie();

var app = express();
let router = express.Router();
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

app.post('/users/login',async (req,res)=>{
    console.log(req.body);
    monguito.openConnection();
    try{
        let user = await service.login(req.body.username,req.body.password);
        res.send(user);
    } catch(error){
        console.log(error.message);
        res.send("404 Not Found");    
    } 

});

app.post('/user',async  (req, res) => {
    console.log(req.body);

    monguito.openConnection();
    await service.createUser(req.body.name,req.body.mail,req.body.username);
    monguito.closeConnection();

    res.send("user guardado");
});

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
    

app.listen(3000,  ()=> {
    console.log('Example app listening on port 3000!');
  });