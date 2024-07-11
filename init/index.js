const mongoose = require("mongoose");
const initData = require("./init.js");
const Listing = require("../models/listing.js");

main().then(()=>{
    console.log("Connection succesful");
}).catch((err)=>{
    console.log(err);
})

async function main(){
    mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

 const initDb = async()=>{
   await Listing.deleteMany({});
   initData.data =   initData.data.map((obj)=> ({...obj,owner:'6680ef1573b429e9c3516f3c'}));
   await Listing.insertMany(initData.data);
 }

 initDb();

