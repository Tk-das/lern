const jwt = require('jsonwebtoken');
const express = require('express');
const userRouter = express.Router();
const { signup,login,home } = require('../controler/userControler.js');

// Middleware
const userVerify = (req,res,next)=>{
    const authToken = req.headers['authorization'];
    if(!authToken){
        res.status(401).json({err:'token not found'})
    }
    const token = authToken.split(' ')[1];
    if(!token){
        res.status(402).json({err:'token not found'})
        console.log('token not found')
    }else{
        const user = jwt.verify(token,process.env.MY_KEY)
           console.log(user)
            req.user = user;
            next();
    }
    
}

userRouter.post('/signup',signup);
userRouter.post('/login',login);
userRouter.get('/',userVerify,home);

module.exports = userRouter;
