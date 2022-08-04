import React from 'react';

function Navbar () {
    return (
        <div className = {"navbar col-lg-12"}>
            <div className={"container-fluid bg-light"}>
                <nav className={"navbar navbar-expand-lg"}>
                    <ul className={"navbar-nav"}>
                        <li className={"nav-item"}>
                            <a className={"nav-link"}>Link 1</a>
                        </li>
                        <li className={"nav-item"}>
                            <a className={"nav-link"}>Link 2</a>
                        </li>
                        <li className={"nav-item"}>
                            <a className={"nav-link"}>Link 3</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
export default Navbar