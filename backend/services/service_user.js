import {User } from '../mongoose/user'

export default class ServiceUser{
    constructor(){
        
    }

    async createUser(mail,username,password,admin){
     
        let userToCreate=new User({
           mail:mail, 
           username: username,
           password: password,
           isAdmin:admin,
           
        }); 
        await userToCreate.save();   
       return "save user succesfully";
 
   }
    
    async findUserByUsername(username){
        const userFinded = await User.findOne({username:username});
             
        return userFinded;
           
    }
    //si no encuentra a nadie devuelve uno

    async ChangePasswordUser(user){
        // const res = await User.
    }

    async login(username,password){
         const user= await User.findOne({username:username,password:password});
            if(user==null){
                throw "password o username incorrectos";
            }
            else{
                console.log(user)
                return user;
            }
       
    }


}
