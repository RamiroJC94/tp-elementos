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
//mocha --opts ./test/mocha.opts --compilers js:@babel/register

describe("pruebo service user", () =>{
     it("inserto un usuario nuevo",async ()=>{
          const message= await service.createUser("pepe","pepe@gmailcom","bernadro15");    
          expect(message).to.equal("save user succesfully");
        })
     it("busco a pepe",()=>{
         //
         expect("hola").to.equal("hola");
     });  
})
    /*"test": "mocha --opts ./test/mocha.opts --require @babel/register"*/
