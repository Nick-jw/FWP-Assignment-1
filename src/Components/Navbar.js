import React from 'react';
import { Link, useNavigate } from 'react-router-dom';



function Navbar ({loggedInUser, onLogout}) {
    const navigate = useNavigate();

    return (
        <nav className={"navbar navbar-expand-lg navbar-dark bg-dark "}>
            <div className = {"container-fluid"}>
                <Link to= "/" className = "navbar-brand p-2" ><h1 className = "display-5">Loop Agile Now</h1></Link>
                {loggedInUser ? (
                    <ul className={"nav justify-content-between"}>
                        <li className="nav-item">
                            <div className = {"nav-link p-3"} >
                                <button type = "button" class = "btn btn-light btn-lg btn-rounded"
                                onClick={() => {
                                    onLogout()
                                    navigate("/", {replace : true,})

                                }}
                                >
                                    <h6 className = "display-7">Log Out</h6>
                                </button>
                            </div>
                        </li>
                </ul>
                ) : (
                    <ul className={"nav justify-content-between"}>
                    <li className="nav-item">
                        <Link to= "sign_in" className = {"nav-link p-3"} ><button type = "button" class = "btn btn-light btn-lg btn-rounded"><h6 className = "display-7">Sign In</h6></button></Link>
                    </li>
                    <li className={"nav-item"}>
                        <Link to= "sign_up" className = {"nav-link p-3"} > <button type = "button" class = "btn btn-light btn-lg btn-rounded"><h6 className = "display-7">Sign Up</h6></button></Link>
                    </li>
                </ul>
                )}

            </div>
        </nav>



        
    );
}
export default Navbar