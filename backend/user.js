import {users} from './userschema.js';
import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken';
export const Register=async(req,res)=>{
    try {
        const {fullname,email,password}=req.body;
        if(!fullname || !email || !password){
            return res.status(401).json({
                message:"Invalid data  broooo",
                success:false
            })
        }
        const existUser=await users.findOne({email});
        if(existUser){
            return res.status(401).json({
                message:"email already exist",
                success:false,
            });
        }
        const hashedpass= await bcryptjs.hash(password,16);
        await users.create({
            fullname,
            email,
            password:hashedpass
        });
        return res.status(201).json({
            message:"Account created succesfully",
            success:true
        });
    } catch (error) {
        console.log(error);
    }
};
export const Login=async(req,res)=>{
    const {email,password}=req.body;
    if(!email || !password){
        return res.status(401).json({
            message:"invalid data",
            success:false
        })
    }
    const user= await users.findOne({email});
    if(!user){
        return res.status(401).json({
            message:"inavalid email  && password",
            success:false
        })
    }
    const isMatch= await bcryptjs.compare(password,user.password);
    if(!isMatch){
        return res.status(401).json({
            message:"inavalid email & Password",
            success:false
        })
    }
    const tokenData={
        id:user._id
    }
    const token=await jwt.sign(tokenData,"hbdehjgdcgyuigrtetxs",{expiresIn:"3d"});
    return res.status(200).cookie("token",token).json({
        message:`welcome back ${user.fullname}`,
        user,
        success:true
    })
};
export const Logout=async(req,res)=>{
return res.status(200).cookie("token","",{expiresIn:new Date(Date.now()),httpOnly:true}).json({
    message:"user logout successfully",
    success:true
});
}

