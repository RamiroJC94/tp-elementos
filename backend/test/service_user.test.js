import {expect} from 'chai';
import MongooseConnection from '../services/connection.js';
import ServiceUser from '../services/service_user.js'

var monguito = new MongooseConnection();
var service = new ServiceUser();

beforeEach(()=>{
    monguito.openConnection();
});

afterEach(()=>{
    monguito.closeConnection();
})

describe("test service user", () =>{
     it("inserto a pepe y y lo recupero",async ()=>{
          await service.createUser("pepe@gmail.com","pepe15","bernadro15",false);
          const user = await service.findUserByUsername("pepe15");    
          expect(user.username).to.equal("pepe15");
     })
     it("pepe se logea y tiene exito",async ()=>{
      await service.createUser("pepe@gmail.com","pepe15","bernadro15",false);
      const pepe=await service.login("pepe15","bernadro15");
         expect("pepe15").to.equal(pepe.username);
     }) 
     it("juan se logea y fracasa",async()=>{
          
         try {
            await service.login("juan@gmail.com","papapap");
          } catch (error) {
             expect("password o username incorrectos").to.equal(error);    
          } 

     }) 
})
 
