
const { string } = require("joi");
const mongoose = require("mongoose");
const passportlocalmongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;

const userSchema =  new Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
});

userSchema.plugin(passportlocalmongoose);

   
module.exports = mongoose.model("User",userSchema);
