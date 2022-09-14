import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return (
      <div class='container-fluid'>
        <div className='navbar'>
          <h3>My Library</h3>
          <NavLink to='/home'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/form'>Form</NavLink>
          <NavLink to='/bookscontainer'>BooksContainer</NavLink>
        </div>
      </div>
    );
}
export default NavBar;