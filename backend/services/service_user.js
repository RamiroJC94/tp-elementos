import {User } from '../mongoose/user'

export default class ServiceUser{
    constructor(){
        
    }

    async createUser(name,mail,username){
        const userToCreate=new User({
           name: name,
           mail: mail,
           username: username}); 
        await userToCreate.save();   
       return "save user succesfully";
   }
    
    async findUserByUsername(username){
        const userFinded= await User.find({username:username});
        return userFinded;
       }


}
