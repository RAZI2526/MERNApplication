import { BrowserRouter,Routes,Route,Link } from "react-router-dom"
import { HomeMernApp } from "./home.mern"
import { RegisterToMern } from "./register.mern"
import { LoginToMERN } from "./login.mern"
import { ErrorInCred } from "./error.mern"
import { VideosMERN } from "./videos.mern"


export function MERNapplication(){

    return(
        <div className="container-fluid">
            <BrowserRouter>
            <div className="d-flex justify-content-between p-3 bg-success text-white">
                <div>MERN Application</div>
                <div>
                    <span className="me-3"> <Link className="text-white" to="/home">Home</Link> </span>
                    <span className="me-3"> <Link className="text-white" to="register">Register</Link> </span>
                    <span className="me-3"> <Link className="text-white" to="login">Login</Link> </span>
                    <span className="me-3"> <Link className="text-white" to="videos">Videos</Link> </span>
                </div>
                <div>
                    <span className="bi bi-search me-3"></span>
                    <span className="bi bi-heart me-3"></span>
                    <span className="bi bi-cart4 me-3"></span>
                    <span className="bi bi-person-fill me-3"></span>
                </div>
            </div>
            

                <Routes>
                    <Route path="/" element={<HomeMernApp/>}></Route>
                    <Route path="/home" element={<HomeMernApp/>}/>
                    <Route path="register" element={<RegisterToMern/>}/>
                    <Route path="login" element={<LoginToMERN/>}/>
                    <Route path="errorInCred" element={<ErrorInCred/>}/>
                    <Route path="videos" element={<VideosMERN/>}/>

                    <Route path="/*" element={<h1 className="text-danger text-center">This path is not valid</h1>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

