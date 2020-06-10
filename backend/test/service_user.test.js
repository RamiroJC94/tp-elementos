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
          await service.createUser("pepe@gmail.com","bernadro15");
          const user = await service.findUserByUsername("pepe@gmail.com");    
          expect(user.username).to.equal("pepe@gmail.com");
     })
     it("pepe se logea y tiene exito",async ()=>{
      await service.createUser("pepe@gmail.com","bernadro15");
      const pepe=await service.login("pepe@gmail.com","bernadro15");
         expect("pepe@gmail.com").to.equal(pepe.username);
     }) 
     it("juan se logea y fracasa",async()=>{
          
         try {
            await service.login("juan@gmail.com","papapap");
          } catch (error) {
             expect("password o username incorrectos").to.equal(error);    
          } 

     }) 
})
 
