import React from 'react';
import { Link } from 'react-router-dom';
import Content from './Content';
import Sign_In from './Sign_In';
import Sign_Up from './Sign_Up';

function Navbar () {
    return (
        <nav className={"navbar navbar-expand-lg navbar-dark bg-dark "}>
            <div className = {"container-fluid"}>
                <Link to= "/" className = "navbar-brand p-2" ><h1 className = "display-5">Loop Agile Now</h1></Link>

                <ul className={"nav justify-content-between"}>
                    <li className="nav-item">
                        <Link to= "sign_in" className = {"nav-link p-3"} ><button type = "button" class = "btn btn-light btn-lg btn-rounded"><h6 className = "display-7">Sign In</h6></button></Link>
                    </li>
                    <li className={"nav-item"}>
                        <Link to= "sign_up" className = {"nav-link p-3"} > <button type = "button" class = "btn btn-light btn-lg btn-rounded"><h6 className = "display-7">Sign Up</h6></button></Link>
                    </li>
                </ul>
            </div>
        </nav>



        
    );
}
export default Navbar