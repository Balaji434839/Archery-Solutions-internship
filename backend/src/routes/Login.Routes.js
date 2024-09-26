import { Router } from "express";
import { Login,Signup,Signout, Productcard, Addtocart,Removefromcart,Updatequantity} from "../controllers/Login.controllers.js";

const LoginRoutes = Router()

LoginRoutes.post('/updatequantity',Updatequantity)
LoginRoutes.post('/removefromcart',Removefromcart)
LoginRoutes.post('/addtocart',Addtocart)
LoginRoutes.post('/productcard',Productcard)
LoginRoutes.post('/signout',Signout)
LoginRoutes.post('/signup', Signup)
LoginRoutes.post('/login',  Login)
LoginRoutes.get('/' , (req,res) =>{
    res.send('health check success')
})

export default LoginRoutes;