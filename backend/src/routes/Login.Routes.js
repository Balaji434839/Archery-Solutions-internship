import { Router } from "express";
import { Login,Signup,Signout } from "../controllers/Login.controllers.js";

const LoginRoutes = Router()

LoginRoutes.post('/signout',Signout)

LoginRoutes.get('/' , (req,res) =>{
    res.send('health check successfull')
})


LoginRoutes.post('/signup', Signup)
 LoginRoutes.get('/' , (req,res) =>{
    res.send('health check successfully')
})
LoginRoutes.post('/login',  Login)
LoginRoutes.get('/' , (req,res) =>{
    res.send('health check success')
})

export default LoginRoutes;