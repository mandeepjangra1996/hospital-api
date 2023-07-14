const mongoose = require('mongoose');
// db con

mongoose.connect('mongodb://127.0.0.1:27017/hospital-api',{useNewUrlParser:true})
const db = mongoose.connection;

db.on("error",()=>{console.log("error in conection");})
db.once('open',()=>{console.log("Connected");})
