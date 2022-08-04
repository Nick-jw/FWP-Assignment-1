import React from 'react';
import {BrowserRouter, NavLink, Routes, Route} from 'react-router-dom';
import Content from './Content';
import Sign_In from './Sign_In';
import Sign_Up from './Sign_Up';

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
                    <NavLink to= "sign_in" className = {"nav-link"} >Sign In</NavLink>
                </li>
                <li className={"nav-item"}>
                    <NavLink to= "sign_up" className = {"nav-link"} > Sign Up</NavLink>
                </li>
            </ul>
            <Routes>
                <Route path = "sign_in" element = {<Sign_In/>} />
                <Route path = "sign_up" element = {<Sign_Up/>} />
            </Routes>


        </div>
    );
}
export default Navbar