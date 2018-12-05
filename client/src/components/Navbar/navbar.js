import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

              <NavLink className="nav-link" to="/">Home</NavLink>
              
              <NavLink className="nav-link" to="/About">About</NavLink>

        </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
