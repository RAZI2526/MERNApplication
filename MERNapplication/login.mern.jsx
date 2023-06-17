import axios from "axios";
import { useFormik } from "formik"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

export function LoginToMERN(){
const[cookies,setCookie,removeCookie]=useCookies();
const[cred,setCred]=useState({userName:"",password:""});
const Navigate=useNavigate();
const formik=useFormik({
    initialValues:{
        userName:"",
        password:""
    },
    onSubmit:(values)=>{
        axios({
            method:"get",
            url:"http://127.0.0.1:5566/dataFromDataBase"
        })
        .then((resp)=>{
            setCred(resp.data);
        })
        for(var key of cred){
            if(key.userName===values.userName && key.password===values.password){
                setCookie("cookieName",values.userName);
                Navigate("/videos")
                break;
            }
            else{
                Navigate("/errorInCred")
                
            }
        }
    }
});
    return(
        <div className="container-fluid">            
            <form onSubmit={formik.handleSubmit} className="border border-2 border-danger w-25 p-3 mt-4">
                <h3 className="text-center">Login</h3>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" className="form-control" name="userName" onChange={formik.handleChange} /></dd>
                    <dt>Password</dt>
                    <dd><input type="text" className="form-control" name="password" onChange={formik.handleChange} /></dd>
                </dl>
                <button>Login</button>
            </form>
        <Link to="/register">New User Register</Link>
        </div>
    )
}