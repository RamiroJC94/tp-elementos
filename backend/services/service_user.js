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
           favorites:[]
        }); 
        await userToCreate.save();   
       return "save user succesfully";
 
   }
    
    async findUserByUsername(username){
        const userFinded = await User.findOne({username:username});
             
        return userFinded;
           
    }
    //si no encuentra a nadie devuelve uno

    async ChangePasswordUser(username,password){
        User.update({username:username},{password:password},function(err){
            if(err) return console.error(err);
        })
        return "succes"
    }

    async updateData(username,email,password,userLogeado){
        User.update({username:userLogeado},{password:password,username:username,mail:email},function(err){
            if(err) return console.error(err);
        })
    }

    async login(username,password){
         const user= await User.findOne({username:username,password:password});
            if(user==null){
                throw "password o username incorrectos";
            }
            else{
               
                return user;
            }
       
    }

    async addToFav(username,movie){
        await User.update({username:username},{$push:{favorites:movie}},function(err){
            if(err) return console.log(err)
        })
        return "sucess"
    }


}
