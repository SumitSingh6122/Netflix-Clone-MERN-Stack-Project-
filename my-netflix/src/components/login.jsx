import React from 'react';
import './login.css';
import { useState } from 'react';

import axios from "axios";
import { API_END_POINT } from '../utils/Api.js';
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/slice.jsx';



    
const Login=()=>{
    const[fullname,setfullname]=useState();
    const [email,setemail]=useState();
    const[password,setpass]= useState();
    const [signIn,signUp]=useState(true);
    const[loader,setloader]=useState(false);
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const handlesign=()=>{
       if(signIn===false){
        signUp(true) ;  
       }
       else{
        signUp(false);
       }
    }

    const getInputData = async (e)=>{
        e.preventDefault();
        setloader(true);
        
        if(!signIn){

            const user = {email,password}; 
            try {
                const res = await axios.post(`${API_END_POINT}/login`, user,{
                    headers:{
                        'Content-Type':'application/json'
                    },
                    withCredentials:true
                });
                if(res.data.success){
                    toast.success(res.data.message);
                }
                dispatch(setUser(res.data.user));

               
                navigate("/browse");
                
            }  catch (error) {
                if (error.response && error.response.data && error.response.data.message) {
                    toast.error(error.response.data.message);
                } else {
                    toast.error("An unexpected error occurred.");
                }
                console.log(error);
            }finally{
                setloader(false);
            }
             
        }else{
        
      
            const user = {fullname, email, password};
            try {
                const res = await axios.post(`${API_END_POINT}/register`,user,{
                    headers:{
                        'Content-Type':'application/json'
                    },
                    withCredentials:true
                });
                if(res.data.success){
                    toast.success(res.data.message);
                }
                signUp(true);
              
            }  catch (error) {
                if (error.response && error.response.data && error.response.data.message) {
                    toast.error(error.response.data.message);
                } else {
                    toast.error("An unexpected error occurred.");
                }
                console.log(error);
            }finally{
                setloader(false);
            }
            
        }
   
    }
    
   
   
return(
      
        <div>
       
      <div className="containerr">
        
        <form onSubmit={getInputData}>
           {signIn? <h1>Sign Up</h1>:<h1>Sign in</h1>}
           {signIn &&
        <div className="form-control">
        <input value={fullname} type="text"  onChange={(e)=>setfullname(e.target.value)}  required/>
        <label >Full Name</label>
    </div>}
    <div className="form-control">
        <input value={email} type="email" onChange={(e)=>setemail(e.target.value)} required/>
        <label >Email or Phone number</label>
    </div>
    <div className="form-control">
        <input value={password} type="password" onChange={(e)=>setpass(e.target.value)} required/>
        <label >password</label>
    </div>
    <button type='submit'  className="signInbtn">{`${loader?"Loading...":(signIn?"Sign up":"Sign in")}`}</button><br />
   {!signIn &&<> <center>OR</center>
    <button className="or" onClick={handlesign}>Create Account</button>
    <center><a href="#greeb">Forget password ?</a></center><br /></>}
    <div className="form-help">
        <div className="remind">
            <input type="checkbox" name="remember-me" id="remember-me" />
            <label >Remember Me</label>
        </div>
        {!signIn?<p>New to Netflix ? <span className='sp' onClick={handlesign}>Sign up now</span></p>:<p>Already have account ? <span className='sp' onClick={handlesign}>Sign in now</span></p>}
  
        <small>This page is protected by Google reCAPTCHA to ensure <br /> you're not a bot. <a href="#766e5"> Learn more.</a></small>
    </div>
        </form>
      </div></div>
    
    );
};
export default Login;