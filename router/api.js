const express = require('express');
const ApiRouter = express.Router();
const UserRouter = require("./user");
const ProductRouter = require("./product");
//const userRouter = require("./")
ApiRouter.get('/',(req,res)=>{
    res.send("API");
})

ApiRouter.use('/user',UserRouter);
ApiRouter.use('/product',ProductRouter);

module.exports = ApiRouter;