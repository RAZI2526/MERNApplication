import { Link } from "react-router-dom"

export function HomeMernApp(){
    return(
        <div className="container-fluid">
            <h1>This is home Page of MERN application.</h1>
                <Link to="/login">Go to Login Page</Link>
        </div>
    )
}