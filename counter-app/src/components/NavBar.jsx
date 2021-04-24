//import React, { Component } from 'react';

const NavBar=({totalCount})=>{
    console.log("NavBar-called");
        return(
            <nav className="navbar navbar-light bg-light">
  <a className="navbar-brand" href="https:www.google.com">Total Component Count (value > 0) =     
      <span className="badge badge-pill badge-secondary">{totalCount}</span></a>
</nav>
        );
    }


export default NavBar;