var express = require("express");
var route = express.Router();

route.get('/',(req,res)=>{
    res.send('Hello world');
})
module.exports = route;
