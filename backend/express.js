import express from 'express';
import MongooseConnection from './services/connection.js';
import ServiceUser from './services/service_user.js'

var monguito=new MongooseConnection();
var service = new ServiceUser();

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/user', (req,res)=>{
    console.log(req.body.username);
    res.send("ok a")
}       
);
  
app.post('/user',  (req, res) => {
    console.log(req.body);
    res.send("user guardado");
});


app.listen(3000,  ()=> {
    console.log('Example app listening on port 3000!');
  });