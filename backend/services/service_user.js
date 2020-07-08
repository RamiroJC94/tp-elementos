import {User,History} from '../mongoose/user'

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

    async ChangeHistoryMovie(username, titulo, imagen, trailer){
        const movie = new History({
            titulo:titulo,
            imagen:imagen,
            trailer:trailer
        })
        User.findOneAndUpdate({username:username},{$push:{history:movie}},function(err){
            if(err) return console.error(err);
        })
        return "ChangeHistoryMovie service succes"
    }

    async getHistoryMovie(username){
        console.log('username :: '+username)
        const userFinded = await User.findOne({username:username});
        console.log('SearchUser :: '+userFinded)
        let result= userFinded.history
        let history=result.map(movie => {
            return{titulo:movie.titulo,imagen:movie.imagen,trailer:movie.trailer}
        })
        return history;
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

    async favorites(username){
        const userFinded = await User.findOne({username:username});

        const favorites = userFinded.favorites
        console.log(favorites)
        return favorites
    }


}
