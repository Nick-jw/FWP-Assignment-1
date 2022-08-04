import React from 'react';
import {BrowserRouter, NavLink, Routes, Route} from 'react-router-dom'

function Navbar () {
    return (
        <div className = {"navbar col-lg-12 bg-dark"}>
            <nav className={"navbar navbar-expand-lg"}>
                <ul className='nav'>
                    <li className={"nav-brand"}>
                        <NavLink to= "" className = {"nav-link"} >Loop Agile Now</NavLink>
                    </li>
                </ul>
            </nav>

                <ul className={"nav justify-content-end"}>
                    <li className={"nav-item"}>
                        <NavLink to= "" className = {"nav-link"} >Sign In</NavLink>
                    </li>
                    <li className={"nav-item"}>
                        <NavLink to= "" className = {"nav-link"} > Sign Up</NavLink>
                    </li>
                </ul>

        </div>
    );
}
export default Navbar