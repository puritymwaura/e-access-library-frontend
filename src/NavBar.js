import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return(
        <div class="container-fluid">
            <div className="navbar">
                <p>Learn Always</p>
                <NavLink to="/">
                    Return
                </NavLink>
                <NavLink to="/home">
                    Home
                </NavLink>
                <NavLink to="/books">
                    Books
                </NavLink>
                <NavLink to="/about">
                    About
                </NavLink>
            </div>
        </div>
    )
}
export default NavBar;