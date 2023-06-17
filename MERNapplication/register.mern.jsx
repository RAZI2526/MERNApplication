import axios from "axios"
import { useFormik } from "formik"
import * as yup from 'yup'
import {useNavigate } from "react-router-dom"
import { useState } from "react"
export function RegisterToMern(){
    const[userID,setUserID]=useState([{userName:"",password:""}]);
    const[err,setErr]=useState("");
    const Navigate=useNavigate();
    const formik=useFormik({
        initialValues:{
            userName:"",
            password:""
        },
        onSubmit:(values)=>{
            axios({
                method:"post",
                url:"http://127.0.0.1:5566/postingMernData",
                data:values
            })
            alert("Data Submitted Successfully.");
            Navigate("/login");
        },
        validationSchema:yup.object({
            userName:yup.string().required().min(4).max(12),
            password:yup.string()
        })
    })
    function VarifyUserId(e){
        axios.get("http://127.0.0.1:5566/dataFromDataBase")
        .then((resp)=>{
            setUserID(resp.data);
           for(var key of userID){
            if(key.userName==e.target.value){
                setErr("User Name already USED-Try another")
            }
            else{
                setErr("User Name Available")
            }
           }
        })
    }

    return(
        <div className="container-fluid">
            <h3>Register for New User</h3>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>Enter User Name-MERN</dt>
                    <dd><input type="text" onKeyUp={VarifyUserId} name="userName" onChange={formik.handleChange} /></dd>
                    <dd> {formik.errors.userName} {err} </dd>
                    <dt>Enter Password-MERN</dt>
                    <dd><input type="text" name="password" onChange={formik.handleChange} /></dd>
                    <dd> {formik.errors.password} {err} </dd>
                </dl>
                <button>SubmitMERN</button>
            </form>
        </div>
    )
}