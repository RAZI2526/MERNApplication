import { useEffect } from 'react';
import {useCookies} from 'react-cookie'
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export function VideosMERN(){
const[cookies,setCookie,removeCookie]=useCookies();
const Navigate=useNavigate();
    useEffect(()=>{
        if(cookies.cookieName==undefined){
            Navigate("/login");
        }
      
    },[])
    function handleLogOut(){
        removeCookie("cookieName");
        Navigate("/login");
    }

    return(
        <div className="container-fluid">
            <h1>This is Videos Component.</h1>
            <p> {cookies.cookieName} </p>
            <div>
            <iframe src="https://www.youtube.com/embed/R0JfzwSdIB8" width="200px" height="200px" ></iframe>
            </div>
            <div>
            <button className='btn btn-danger me-4' onClick={handleLogOut}>LogOut</button>
            <button className='btn btn-danger ms-4'> <Link style={{color:"white"}} to="/home">Home </Link> </button>
            </div>
        </div>
    )
}