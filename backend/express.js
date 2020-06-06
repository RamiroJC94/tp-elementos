import express from 'express';
import MongooseConnection from './services/connection.js';
import ServiceUser from './services/service_user.js'

var monguito=new MongooseConnection();
var service = new ServiceUser();

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/user', async (req,res)=>{
    console.log(req.body.username);
    monguito.openConnection();
    const userfinded= await service.findUserByUsername(req.body.username);
    monguito.closeConnection();
    res.json(JSON.stringify(userfinded));
}       
);
  
app.post('/user',async  (req, res) => {
    console.log(req.body);

    monguito.openConnection();
    await service.createUser(req.body.name,req.body.mail,req.body.username);
    monguito.closeConnection();

    res.send("user guardado");
});


app.listen(3000,  ()=> {
    console.log('Example app listening on port 3000!');
  });