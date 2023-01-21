import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
 
  return (
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarNav">   
            <NavLink class="nav-item" to="/"
            exact>
              Home
          </NavLink>
            <NavLink class="nav-item" to="/movies"
            exact>
              Movies
            </NavLink>
            <NavLink class="nav-item" to="/directors"
            exact>
              Directors
            </NavLink>
            <NavLink class="nav-item" to="/actors"
            exact>
              Actors
            </NavLink>
    </div>
  </div>
</nav>)
}
export default NavBar;
