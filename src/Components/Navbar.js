import React from 'react';
import { Link, useNavigate } from 'react-router-dom';



function Navbar ({loggedInUser, onLogout}) {
    const navigate = useNavigate();

    return (
        <nav className={"navbar navbar-expand-lg navbar-dark bg-dark sticky-top"}>
            <div className = {"container-fluid "}>
                {loggedInUser ? ( //user is logged in display profile/feed/log out button; unacitve h1
                    <><div className = "navbar-brand p-2">
                        <h1 className = "display-5">Loop Agile Now</h1>
                    </div>
                    <ul className={"nav justify-content-between"}>
                        <li className="nav-item">
                            <div className = {"nav-link p-3"} >
                                <button type = "button" className = "btn btn-light btn-lg btn-rounded"
                                onClick={() => {
                                    navigate("/profile", {replace : true,})

                                }}
                                >
                                    <h6 className = "display-7">Profile</h6>
                                </button>
                                
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className = {"nav-link p-3"} >
                                <button type = "button" class = "btn btn-light btn-lg btn-rounded"
                                onClick={() => {
                                    navigate("/feed", {replace : true,})

                                }}
                                >
                                    <h6 className = "display-7">Feed</h6>
                                </button>
                                
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className = {"nav-link p-3"} >
                                <button type = "button" class = "btn btn-light btn-lg btn-rounded"
                                onClick={() => {
                                    onLogout() // see app.js
                                    navigate("/", {replace : true,})

                                }}
                                >
                                    <h6 className = "display-7">Log Out</h6>
                                </button>
                                
                            </div>
                        </li>
                </ul></>
                ) : ( //user is not loggedin sign up/ sign in button; acitve h1
                    <><Link to= "/" className = "navbar-brand p-2" ><h1 className = "display-5">Loop Agile Now</h1></Link>
                    <ul className={"nav justify-content-between"}>
                    <li className="nav-item">
                        <Link to= "sign_in" className = {"nav-link p-3"} ><button type = "button" class = "btn btn-light btn-lg btn-rounded"><h6 className = "display-7">Sign In</h6></button></Link>
                    </li>
                    <li className={"nav-item"}>
                        <Link to= "sign_up" className = {"nav-link p-3"} > <button type = "button" class = "btn btn-light btn-lg btn-rounded"><h6 className = "display-7">Sign Up</h6></button></Link>
                    </li>
                </ul></>
                )}

            </div>
        </nav>



        
    );
}
export default Navbar