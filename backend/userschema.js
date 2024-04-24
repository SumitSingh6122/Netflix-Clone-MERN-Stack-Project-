import mongoose from "mongoose";
const userschema=new mongoose.Schema({
    fullname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
},{timestamps:true});
export const users=mongoose.model("users",userschema);