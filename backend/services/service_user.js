import {User } from '../mongoose/user'

export default class ServiceUser{
    constructor(){
        
    }

    async createUser(username,password){
     
        let userToCreate=new User({
            
           username: username,
           password: password,
           
        }); 
        await userToCreate.save();   
       return "save user succesfully";
 
   }
    
    async findUserByUsername(username){
        const userFinded = await User.findOne({username:username});
             
        return userFinded;
           
    }
    //si no encuentra a nadie devuelve uno
    async login(username,password){
         const user= await User.findOne({username:username,password:password});
            if(user==null){
                throw "password o username incorrectos";
            }
            else{
                return user;
            }
       
    }


}
