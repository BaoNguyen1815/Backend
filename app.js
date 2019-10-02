const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const bodyParser = require('body-parser');
const ApiRouter = require("./router/api");
const app = express();

app.use((req,res,next)=>{
    next(); // cho chuong trinh tiep tuc di
});

app.use(cors({ origin: ['http://localhost:3000'], credentials: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/curnonwatch", (err)=>{
    if(err) console.log(err);
    else console.log("Database connect Successfully");
});

app.use("/api",ApiRouter);

app.listen(6969,(err)=>{
    if(err) console.log(err)
    else console.log("Server start successfully");
});